// common function for getting input field value

function getTextField(f_id){
    const raw_value = document.getElementById(f_id).innerText;
    const real_value = parseFloat(raw_value);

    return real_value;
}

function getInputField(f_id){
    const raw_value = document.getElementById(f_id).value;
    const real_value = parseFloat(raw_value);

    return real_value;
}

function check(data){

    const balance = getTextField('balance');

    if(data<0 || isNaN(data)){
        alert('please Enter a correct amount');
        return false;
    }else if(data> balance){
        alert('Not enough balance in account');
        return false
    }else{
        return data;
    }

}

function logRegister(type,amount){

    const d = new Date();

    const arr = {
        'noa-bal':'for Flood at Noakhali, Bangladesh',
        'feni-bal': 'for Flood Relief in Feni,Bangladesh',
        'quo-bal' : 'for Injured in the Quota Movement'
    }

    const newDonation = `
    <div class="border-2 rounded-xl p-2">
                <h1 class="text-lg font-bold pt-1">
                ${amount} TK has been Donated ${arr[type]}
                </h1>
                <br>
                <p class="pt-2">
                  ${d}  
                </p>
            </div>
    `;

    document.getElementById('history').innerHTML += newDonation;

}

function update(label_id,new_bal,amount){
    document.getElementById(label_id).innerText = new_bal;

    const balance = getTextField('balance');

    document.getElementById('balance').innerText = balance - amount;

    document.getElementById('modal-val').innerText = amount + 'TK';

    logRegister(label_id,amount);

    document.getElementById('my_modal_2').showModal();

    return true;
}



// Noakhali Flood
document.getElementById('noa-btn').addEventListener('click',function(){
    const amount = check(getInputField('noakhali'));
    if(typeof(amount) !== 'boolean'){
        const noa_bal = getTextField('noa-bal');
        const new_balance = noa_bal + amount;
        const status = update('noa-bal',new_balance,amount);

        if(status){
            document.getElementById('noakhali').value = '';
        }
    }
});

// Feni Flood

document.getElementById('feni-btn').addEventListener('click',function(){
    const amount = check(getInputField('feni'));
    if(typeof(amount) !== 'boolean'){
        const noa_bal = getTextField('feni-bal');
        const new_balance = noa_bal + amount;
        const status = update('feni-bal',new_balance,amount);

        if(status){
            document.getElementById('feni').value = '';
        }
    }
});


// quota
document.getElementById('quo-btn').addEventListener('click',function(){
    const amount = check(getInputField('quota'));
    if(typeof(amount) !== 'boolean'){
        const noa_bal = getTextField('quo-bal');
        const new_balance = noa_bal + amount;
        const status = update('quo-bal',new_balance,amount);

        if(status){
            document.getElementById('quota').value = '';
        }
    }
});