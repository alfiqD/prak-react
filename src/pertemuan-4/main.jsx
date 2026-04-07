import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";


createRoot(document.getElementById("root"))
    .render(
        <div className="card">  
                <ResponsiveText/>
                {/* <FrameworkListSearchFilter/> */}
        </div>
    )
    