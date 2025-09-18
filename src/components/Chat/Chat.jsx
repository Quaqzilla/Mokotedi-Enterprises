import './Chat.css';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    return(
        <div>
                <div className="chatPage">

                    <div className="chatSection">

                        <div className="textArea">
                            <div className="userSection">
                                <p>This is the User's input</p>
                                <Avatar
                                    alt="User"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 45, height: 45 }}
                                />
                            </div>

                            <div className="agentSection">
                                <Avatar
                                    alt="Agent"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 45, height: 45 }}
                                />
                                <p>This is the agent's output</p>
                            </div> 
                        </div>
                        
                        <div className="queryArea">
                        {/*Find a property you can wrap this section using thats scrollable */}
                            <div className="query">
                                <input 
                                type="text"
                                required
                                placeholder='Talk To Me...'
                                />
                                
                            
                                <SendIcon className = "send"/>
                                
                            </div>

                            <div className="options">

                                <button className="option">
                                    text
                                </button>
            
                            </div>
                        </div>                   


                    </div>
                </div>

        </div>
    )
}

export default Chat;