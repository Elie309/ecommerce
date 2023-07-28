import {
    UserCredential, UserInfo,
    browserSessionPersistence, createUserWithEmailAndPassword,
    sendEmailVerification, setPersistence, signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { regEmail, regName, regPasswordForLogin, regPasswordForRegistration } from "../Helpers/regexConfig";
import { fireAuth, fireDB } from "../../firebase/firebase";
import IResponse from "../interface/IResponse";
import firebaseErrorAuthHandler from "../Helpers/FirebaseErrorAuthHandler";
import { addDoc, collection } from "firebase/firestore";

const USER_COLLECTION = "users";

export default class User {

    //#region Properties
    #id: string = "";
    #username: string = "";
    #email: string = "";
    #password: string = "";
    #confirmPassword: string = "";

    //#endregion

    //#region Getters & setters

    get id(): string {
        return this.#id;
    }

    set id(value: string) {
        this.#id.trim();
        this.#id = value;
    }

    get username(): string {
        return this.#username;
    }

    set username(value: string) {
        this.username.trim();
        if (!regName.test(value)) {
            throw new Error("Username must be at least 3 characters");
        }
        this.#username = value;
    }

    get email(): string {
        return this.#email;
    }

    set email(value: string) {
        this.email.trim();
        if (!regEmail.test(value)) {
            throw new Error("Invalid authentication");
        }
        this.#email = value;
    }

    get password(): string {
        return this.#password;
    }

    set password(password: string) {
        //We will check when we make the account for the password
        this.#password = password;
    }

    get confirmPassword(): string {
        return this.#confirmPassword;
    }

    set confirmPassword(value: string) {
        this.#confirmPassword = value;
    }

    //#endregion


    //#region Json methods
    public static fromJSON(json: any): User {
        const user = new User();
        user.id = json.id;
        user.username = json.username;
        user.email = json.email;
        user.password = json.password;
        return user;
    }

    public toJSON(): any {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
        }
    }

    //#endregion

    //#region Simple Methods

    public isPasswordAndConfirmPasswordEqual(): boolean {
        if (this.password === this.confirmPassword) {
            return true;
        }
        return false;
    }

    //#endregion

    // #region Crud methods

    public static async register(userObject: User): Promise<IResponse<UserCredential | null>> {
        try {

            if (!userObject.isPasswordAndConfirmPasswordEqual()) {

                return {
                    error: {
                        code: "auth/passwords-not-equal",
                        message: "Passwords are different"
                    },
                    status: 400,
                    success: false,
                    message: "Passwords are different",
                    data: null
                }

            }

            if (!regPasswordForRegistration.test(userObject.password)) {
                return {
                    error: {
                        code: "auth/weak-password",
                        message: "Password should be at least 6 characters"
                    },
                    status: 400,
                    success: false,
                    message: "Password should be at least 8 characters, one uppercase, one lowercase, one number and one special character",
                    data: null
                };

            }

            const user = await createUserWithEmailAndPassword(fireAuth, userObject.email, userObject.password);

            await updateProfile(user.user, {
                displayName: userObject.username
            });

            await sendEmailVerification(user.user);

            //TODO: Create instance in firestore

            const newUserRegister = new User();
            newUserRegister.id = user.user.uid;
            newUserRegister.username = userObject.username;
            newUserRegister.email = userObject.email;

            await addDoc(collection(fireDB, USER_COLLECTION), newUserRegister.toJSON());


            return {
                error: {
                    code: "",
                    message: ""
                },
                status: 201,
                success: true,
                message: "User created, please verify your email",
                data: user
            };

        } catch (error: any) {
            return firebaseErrorAuthHandler(error);
        }


    }

    public async login(): Promise<IResponse<UserCredential | null>> {


        try {

            if (!regPasswordForLogin.test(this.password)) {
                return {
                    error: {
                        code: "auth/bad-password",
                        message: "Password should be at least 8 characters"
                    },
                    status: 400,
                    success: false,
                    message: "Password should be at least 8 characters",
                    data: null
                };
            }


            await setPersistence(fireAuth, browserSessionPersistence);

            const user = await signInWithEmailAndPassword(fireAuth, this.email, this.password);

            if (user.user.emailVerified === false) {

                await fireAuth.signOut();

                //TODO: Create a page for this

                return {
                    error: {
                        code: "auth/email-not-verified",
                        message: " Please verify your email."
                    },
                    status: 400,
                    success: true,
                    message: "Please verify your email.",
                    data: user
                };

            }

            return {
                error: {
                    code: "",
                    message: ""
                },
                status: 200,
                success: true,
                message: "User logged in, you will be redirected.",
                data: user
            };


        } catch (error: any) {
            return firebaseErrorAuthHandler(error);
        }

    }

    static async logout(): Promise<IResponse<null>> {

        //Logout user

        try {

            await fireAuth.signOut();

            return {
                error: {
                    code: "",
                    message: ""
                },
                status: 200,
                success: true,
                message: "User logged out, you will be redirected.",
                data: null
            }


        } catch (error: any) {

            return firebaseErrorAuthHandler(error);

        }

    }

    static async getLoggedUserInformation(): Promise<IResponse<UserInfo | null>> {

        return new Promise((resolver) => {
            fireAuth.onAuthStateChanged((user: any) => {


                if (user === null) {

                    resolver({
                        error: {
                            code: "auth/user-not-found",
                            message: "User not found"
                        },
                        status: 400,
                        success: false,
                        message: "User not found",
                        data: null
                    });

                    return;
                }

                if (fireAuth.currentUser?.emailVerified === false) {

                    resolver({
                        error: {
                            code: "auth/email-not-verified",
                            message: "Email not verified"
                        },
                        status: 400,
                        success: false,
                        message: "Email not verified",
                        data: fireAuth.currentUser
                    });

                    return;

                }

                resolver({
                    error: {
                        code: "",
                        message: ""
                    },
                    status: 200,
                    success: true,
                    message: "User Information",
                    data: fireAuth.currentUser
                })

            });

        })



    }

    static async isLoggedIn(): Promise<boolean> {

        return new Promise((resolver) => {

            fireAuth.onAuthStateChanged((user) => {
                if (user) {
                    resolver(true)
                } else {
                    resolver(false)
                }
            });

        })





    }


    public getOrders(): void {

        //Get orders for user

    }

    public getCurrentCart(): void {

        //Get order for user

    }



}

//#endregion




