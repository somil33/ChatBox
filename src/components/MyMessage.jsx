const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return(
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            classNAme="message-image"
            style={{float:'right'}}
            />
        )
    }
    return(
        <div classNAme="message" style={{float:"right",marginRight:"18px",color:"black",backgroundColor:"lightgreen"}}>
        {message.text}  
        </div>
    );

}
export default MyMessage;