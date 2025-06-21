import './Hello.css'
export default function Hello({name="(no name)",surname="(no surname)",weight="(no weight)"}) {
    return (
        <> 
            <img src="Cat.jpg" width="200"></img>
            <h1>Hello,{name} {surname} {weight} kg.</h1>   
        </>
    );
}
