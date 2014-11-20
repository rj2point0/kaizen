// JavaScript Document
 var ContentHeight = 200;
    var SlideTime = 600;
    var openAccordion = '';
    function Accordion_fn(index)
    {
        var index_ID =  "Content"+ index ;
        if(openAccordion == index_ID)
        {
            index_ID = '';
        }
        set(new Date().getTime(),SlideTime,openAccordion, index_ID);
        openAccordion = index_ID;
    }

    function set(lastTick, timeLeft, closedId, openedId)
    {
        setTimeout(function(){animate(lastTick,timeLeft,closedId, openedId );}, 33);
    }
    function animate(lastTick, timeLeft, closedId, openedId)
    {
        var curTick = new Date().getTime();
        var elapsedTicks = curTick - lastTick;
        var open = (openedId == '') ? null : document.getElementById(openedId);
        var close = (closedId == '') ? null : document.getElementById(closedId);

        if(timeLeft <= elapsedTicks)
        {
            if(open != null)
                open.style.height = ContentHeight + 'px';

            if(close != null)
            {
                close.style.display = 'none';
                close.style.height = '0px';
            }
            return;
        }

        timeLeft -= elapsedTicks;
        var newClosedHeight = Math.round((timeLeft/SlideTime) * ContentHeight);

        if(open != null)
        {
            if(open.style.display != 'block')
                open.style.display = 'block';
               open.style.height = (ContentHeight - newClosedHeight) + 'px';
        }

        if(close != null)
        {
            close.style.height = newClosedHeight + 'px';
        }
        set(curTick,timeLeft,closedId, openedId);

    }
    $("#Accordion_1").click(function(){Accordion_fn(1);});
    $("#Accordion_2").click(function(){Accordion_fn(2);});
    $("#Accordion_3").click(function(){Accordion_fn(3);});
    $("#Accordion_4").click(function(){Accordion_fn(4);});
    $("#Accordion_5").click(function(){Accordion_fn(5);});