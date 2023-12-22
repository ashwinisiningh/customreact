function customRender(reactElement)
{
   
 const element = document.createElement(reactElement.type);
 element.innerHTML = reactElement.children;
for (let i in reactElement.props)
{
    element.setAttribute(i,reactElement.props[i]);
}
maincontainer.appendChild(element);
}
const reactElement ={
type:'a',
props:{
 href:'https://google.com',
 target:'_blank'
}, 
children:'click to visit'
}
const maincontainer=document.querySelector("#root");
customRender(reactElement);