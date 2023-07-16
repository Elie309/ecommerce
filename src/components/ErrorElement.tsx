import CenteredLayout from "../Layout/CenteredLayout";

interface Props {
  title: string;
  message: string;
  goBackLink: string;
}

export default function ErrorElement(props: Props) {
  return (
    <CenteredLayout>
      <div className="px-4 py-8 bg-white shadow-md rounded-md flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900">{props.title}</h1>
        <p className="text-sm font-semibold text-gray-500">{props.message}</p>

          <a className="
              px-4 py-2 mt-4 text-sm font-semibold
               text-indigo-500 bg-white rounded-md 
               hover:bg-gray-200 focus:outline-none 
               focus:bg-grey-200 text-center
               border-2 border-indigo-500
               "

               href="/"
               
          >
            Go Back
          </a>
      </div>
    </CenteredLayout>

  )
}
