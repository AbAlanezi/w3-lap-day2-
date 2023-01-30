// let divroot = document.getElementById("root")
// let elment = document.createElement("div");
// elment.innerHTML ="heloo world";
// divroot.append(elment)



// const contenr = document.getElementById("root")
// const elment = React.createElement("div", {
//     children: "abdalazez"
// }) 

// ReactDOM.render(elment, contenr)

const contenr = document.getElementById("root");
const elemnt = <>
       <div class="comtenr">

       <img height="100" src="https://cdn3.vectorstock.com/i/1000x1000/67/87/businessman-man-character-with-cv-or-resume-vector-23726787.jpg"></img>
    
    <div>
    <p><i class="fa-solid fa-credit-card"></i>Abdalazez Mohmmad </p>
    <p><i class="fa-solid fa-location-dot"> </i>Riyadh</p>
    <p><i class="fa-regular fa-envelope"></i> azooz04400@gmail.com</p>
    <p><i class="fa-solid fa-phone"></i>0534821585</p>
    </div>
    <div>
        <h2>Education</h2>
        <ul>Northern Border University</ul>
        <ul>Bachelor of Computer Science</ul>
    </div>
    <div>
        <h2>Experience</h2>
        <ol>Five months in software developer </ol>
    </div>
    <div>
        <div class="div-tabl">
        <table class="div-tabl">
          
          <div className="div-td">
            <h2>skils</h2>
            <tr >
                <td className="td1">Office programs</td>
                <td className="td1">azure AD</td>
                <td className="td1">Skillful use of Computer</td>
            </tr>
          </div>
            <tr>
                <td>middle</td>
                <td>expert</td>
                <td>expert</td>
            </tr>
        </table>

        </div>
        <div>
                <h2>languges</h2>
                <div class="lang">
                <p> Arabic</p>
                <p> English</p>
                </div>
        </div>
    </div>

       </div>
</>
ReactDOM.render(elemnt, contenr)