
const toggleButton = (childrenID, seeMoreID) => {
    const children = document.getElementById(childrenID);
    const seeMore = document.getElementById(seeMoreID);

    seeMore.innerText = children.style.display === 'none' ? '<' : '>...';
    children.style.display = children.style.display === 'none' ? 'block' : 'none';
    console.log(childrenID);
}
