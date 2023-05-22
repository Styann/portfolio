function GoToIndex(){
    location.href = 'index.html';
}

function GoToGitHub(){
    window.open('https://github.com/Styann', '_blank');
}

function GoToLinkedIn(){
    window.open('https://www.linkedin.com/in/yann-steunou-b72292228/', '_blank');
}

function goToGitHubProject(project){
    window.open(`https://github.com/Styann/${project}`, '_blank');
}

function getOld(birthdate = new Date('12/11/2002')){  
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}



function githubIcon(){
    return `<svg class='bi bi-github small-icon github-icon cursor-pointer' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' onclick='GoToGitHub()'>
    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'/>
    </svg>`;
}

function linkedinIcon(){
    return `<svg class="bi bi-linkedin small-icon linkedin-icon cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" onclick="GoToLinkedIn()">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>`;
}

function languageIcon(){
    return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
    </svg>`;
}

function frameworkIcon(){
    return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
    </svg>`;
}

function boltIcon(){
    return `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-nut" viewBox="0 0 16 16">
    <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z"/>
    <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"/>
    </svg>`;
}

function carousel(id, sources){
    var items = '';

    for(let i = 0; i < sources.length; i++){
        items += `<div class='carousel-item ${((i==0) ? 'active': null)}'> <img src='${sources[i]}' class='d-block w-100'> </div>`;
    }

    var carousel = `<div id='${id}' class='carousel slide' data-interval='false'>
            
        <div class='carousel-inner'>${items}</div>
    
        <button class='carousel-control-prev' type='button' data-bs-target='#${id}' data-bs-slide='prev'>
            <span class='carousel-control-prev-icon bg-dark rounded' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
        </button>
        <button class='carousel-control-next' type='button' data-bs-target='#${id}' data-bs-slide='next'>
            <span class='carousel-control-next-icon bg-dark rounded' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
        </button>
    </div>`;

    return carousel;
}

function divImg(elements){
    var div = `<div class='d-flex justify-content-center'>`;

    for(var picture in elements){
        div += `<div class='mx-2 bounce-from-parent card-custom'>
        <img class='devicon' src='pictures/icon/${picture}'>
        <hr>
        <p class='px-2'>${elements[picture]}</p>
        </div>`;
    }

    return (div += '</div>');
}

function timelineElement(date, name, href = null){
    var hover = null;
    if(href){
        hover = 'timeline-hover';
        href = `href='$href'`;
    }   

    return `<a ${href} class='timeline-a'>
                <div class='container timeline-element $hover my-0 p-3 border-5 border-start'>
                    <span class='timeline-fade-dot'>
                        <span class='timeline-dot'></span>
                    </span>
                    <p>${date}</p>
                    <p>${name}</p>
    </div></a>`;
}


function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function getComponent(file){
    return loadFile(`components/${file}`);
}