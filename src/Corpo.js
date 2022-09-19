import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Corpo() {
    return (
        <div class="corpo">
        <div class="esquerda">
         < Stories/>
  
          < Posts/>
        </div>
  
        < Sidebar/>
      </div>
    )
}