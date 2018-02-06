var counter = 0;
var play = new Audio();
function PlaySound(v) {
    play.src=v;
    play.play();
}



var audio = [
    { link: 'sound/alan_walker___fade.mp3', nume: 'Alan Walker - Fade' },
    { link: 'sound/rockstar_post_malone.mp3', nume: 'Rockstar-Post Malone' },
    { link: 'sound/i_like_me_better.mp3', nume: 'I Like Me Better' },
    { link: 'sound/all_the_way_up.mp3', nume: ' All the way up' },
    { link: 'sound/beautiful_ringtone_2.mp3', nume: 'Beautiful Ringtone 2' },
    { link: 'sound/very_super_tone_ever.mp3', nume: 'Very Super Tone Ever' }
    ];


    var JSONreadyaudio = JSON.stringify(audio);
    localStorage.setItem('audio',JSONreadyaudio);

    var addItem = function (index,link,nume) {
        var oldItems = JSON.parse(localStorage.getItem('id_audio')) || [];
        
        var newItem = {
            'link': link,
            'nume': nume
        };
        
        oldItems.push(newItem);
        location.reload();
        window.localStorage.setItem('audio_'+index, JSON.stringify(oldItems));
        
    };
    
    var deleteItem = function(i){
        window.localStorage.removeItem(i);        
    
        location.reload();
    }
