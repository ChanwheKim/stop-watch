var running = 0;
var milliSecond = 0;
var second = 0;
var minute = 0;
var timeId;

document.getElementById('start').addEventListener('click', function() {
    if(running === 0) {
        running = 1;
        increment();
    }
});

document.getElementById('stop').addEventListener('click', function() {
    running = 0;
})

document.getElementById('renew').addEventListener('click', function() {
    if(running === 0) {
        
        milliSecond = 0;
        second = 0;

        var fields = document.querySelectorAll('.time-label');
        for(var i = 0; i < fields.length; i++) {
            fields[i].textContent = '00';
        }

        clearTimeout(timeId);
    }
});

function increment() {
    
    if(running === 1) {
        timeId = setTimeout(function() {
            milliSecond++
            if(milliSecond === 100) {
                milliSecond = 0;
                second += 1;
            }

            if(second === 60) {
                second = 0;
                minute += 1;
            }

            if(milliSecond < 10 ) {
                document.querySelector('.milliSeconds').textContent = '0' + milliSecond;
            } else {
                document.querySelector('.milliSeconds').textContent = milliSecond;
            }

            if(second < 10) {
                document.querySelector('.seconds').textContent = '0' + second;
            } else {
                document.querySelector('.seconds').textContent = second;
            }

            if(minute < 10) {
                document.querySelector('.minutes').textContent = '0' + minute;
            } else {
                document.querySelector('.minutes').textContent = minute;
            }

            increment();

        }, 10);
    }

};