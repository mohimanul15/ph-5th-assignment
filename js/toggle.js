// button toggle

function exe(btn_clicked,btn_hide,show_section,hide_section){
    btn_clicked.classList.add('btn-primary');
    btn_clicked.classList.remove('btn-active');
    
    btn_hide.classList.remove('btn-primary');
    btn_hide.classList.add('btn-active');

    show_section.classList.add('flex');
    show_section.classList.remove('hidden');
    hide_section.classList.add('hidden');
    hide_section.classList.remove('flex');
}

document.getElementById('don-btn').addEventListener('click',function(){
    const btn_clicked = document.getElementById('don-btn');
    const btn_hide = document.getElementById('his-btn');

    const show_section = document.getElementById('donation');
    const hide_section = document.getElementById('history');
    
    exe(btn_clicked,btn_hide,show_section,hide_section);

});

document.getElementById('his-btn').addEventListener('click',function(){
    const btn_clicked = document.getElementById('his-btn');
    const btn_hide = document.getElementById('don-btn');

    const show_section = document.getElementById('history');
    const hide_section = document.getElementById('donation');
    
    exe(btn_clicked,btn_hide,show_section,hide_section);

});