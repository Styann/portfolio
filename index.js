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

function copyEmail(){
    navigator.clipboard.writeText('steunouyannpro@gmail.com'); 
}