import rate from "../../assets/comment/rate.svg"

const CommentCard = ({travelName,comment,day,month,date,person}) => {
  return ( 
    <div className=" h-[500px] p-7 flex justify-center items-center">
        <div className="flex flex-col items-center gao-2 r w-[500px] ">
            <p className="akaya  text-5xl mb-6" >{travelName}</p>
            <p className="text-base font-medium leading-8 text-center mb-5">{comment}</p>
            <img src={rate} className="w-48 mb-4"/>
            <p className="text-gray-500 mb-3">{`Published ${day}, ${month} ${date} on Trustpilot`}</p>
            <p className="font-semibold text-lg">{person}</p>
        </div>
    </div>
  )
}

export default CommentCard