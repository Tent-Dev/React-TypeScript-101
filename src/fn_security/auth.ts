let masterpassword: string = '0000';

export let mydata = {
    firstname: 'Chutipas',
    lastname: 'Borsub',
    nickname: 'Tent',
    age: 25
}

function fillpassword (input:string){
    let check = 0;
    if(input === masterpassword){
        console.log(`Login success!!\nWelcome ${mydata.nickname}`);
        check = 1;
    }
    else{
        console.log('Password is not correct. Please try again.');
    }

    return check;
}

export { fillpassword };