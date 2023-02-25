const Header = (props) =>{
   //Great example of props, connecting Header to App.js with "title" in app.js
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
export default Header
//A way to deconstructure props is using ({title}) instead of {props.title}
//({title}) and in the h1 it's {title}