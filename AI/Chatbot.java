import java.util.Scanner;
import org.alicebot.ab.*;

public class Chatbot{
    public static void main(String[] args){
        Bot bot = new Bot("Consultant", "path/to/aiml/file");
        Chat chatSession = new Chat(bot);
        String response = chatSession.multisentenceRespond("Hello");
        System.out.println(response);
    }
}