function customWayPoint(i,e,t){$(i).waypoint({handler:function(t){"down"==t?$(i).addClass(e):$(i).removeClass(e)},offset:t})}var defaultOffset="50%";for(i=0;i<33;i++)customWayPoint(".timeline__item--"+i,"timeline__item-bg",defaultOffset);