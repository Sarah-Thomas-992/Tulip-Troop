const lightGreenButton = document.querySelector(".light-green");
const medGreenButton = document.querySelector(".medium-green");
const darkGreenButton = document.querySelector(".dark-green");
const lightPinkButton = document.querySelector(".light-pink");
const darkPinkButton = document.querySelector(".dark-pink");
const turquoiseButton = document.querySelector(".turquoise");
const lightBlueButton = document.querySelector(".light-blue");
const lavenderButton = document.querySelector(".lavender");
const darkPurpleButton = document.querySelector(".dark-purple");
const trees = document.querySelector(".tree-icons");

lightGreenButton.addEventListener("click", function(){
    const lgTree = document.createElement("li");
    lgTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #aad27a;"></i>`;
    trees.append(lgTree);
});

medGreenButton.addEventListener("click", function(){
    const mgTree = document.createElement("li");
    mgTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #66a148;"></i>`;
    trees.append(mgTree);
});

darkGreenButton.addEventListener("click", function(){
    const dgTree = document.createElement("li");
    dgTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #266807;"></i>`;
    trees.append(dgTree);
});

lightPinkButton.addEventListener("click", function(){
    const pinkTree2 = document.createElement("li");
    pinkTree2.innerHTML = `<i class="fa-solid fa-tree" style="color: #ffb3cd;"></i>`;
    trees.append(pinkTree2);
});

darkPinkButton.addEventListener("click", function(){
    const pinkTree1 = document.createElement("li");
    pinkTree1.innerHTML = `<i class="fa-solid fa-tree" style="color: #e00379;"></i>`;
    trees.append(pinkTree1);
});

turquoiseButton.addEventListener("click", function(){
    const turTree = document.createElement("li");
    turTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #20e3d9;"></i>`;
    trees.append(turTree);
});

lightBlueButton.addEventListener("click", function(){
    const lbTree = document.createElement("li");
    lbTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #6ebce2;"></i>`;
    trees.append(lbTree);
});

lavenderButton.addEventListener("click", function(){
    const lavTree = document.createElement("li");
    lavTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #d493e1;"></i>`;
    trees.append(lavTree);
});

darkPurpleButton.addEventListener("click", function(){
    const dpTree = document.createElement("li");
    dpTree.innerHTML = `<i class="fa-solid fa-tree" style="color: #7b02a0;"></i>`;
    trees.append(dpTree);
});








