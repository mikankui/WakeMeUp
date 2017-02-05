/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('10min');
        this.receivedEvent('5min');
        this.receivedEvent('1min');
        this.receivedEvent('stop');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var button = document.getElementById(id);

        button.addEventListener("click", function() {
                    
            //add setInterval ID
            //localStorage.setItem("TIMER_FLAGS",JSON.stringify({}));
            //console.log('wakeup pushed ' +JSON.stringify(TIMER_FLAGS));
            var settingtime = document.getElementById("settime");

/*
            // example of a callback method
            var successCallback = function(result) {
                console.log('SUCCESS');
                var settingtime = document.getElementById("settime");
                if (result.type==='wakeup') {
                    var alarmDate = new Date();
                    settingtime.innerText=alarmDate;
                    console.log('wakeup alarm detected--' + result.extra);
                } else if(result.type==='set'){
                    console.log('wakeup alarm set--' + result);
                } else {
                    var alarmDate = new Date();
                    settingtime.innerText=alarmDate;
                    console.log('wakeup unhandled type (' + result.type + ')');
                }
            }; 

            var errorCallback = function(result) {
                var settingtime = document.getElementById("settime");
                //var alarmDate = new Date();
                settingtime.innerText="ERROR";
                console.log('ERROR');
            }

            // set wakeup timer
            window.wakeuptimer.wakeup(
                successCallback,  
                errorCallback, 
                // a list of alarms to set
                {
                        alarms : [{
                            type : 'onetime',
                            time : { hour : 0, minute : 1 },
                            extra : { message : 'json containing app-specific information to be posted when alarm triggers' }, 
                            message : 'Alarm has expired!'
                    }] 
                }
            );
*/

            var showCountdown =function(alarmDate) {
                // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
                console.log(alarmDate);
                var nowDate = new Date();
                var dnumNow = nowDate.getTime();
                var dnumTarget = alarmDate.getTime();

                // 表示を準備
                var dlYear = alarmDate.getFullYear();
                var dlMonth = alarmDate.getMonth() + 1;
                var dlDate = alarmDate.getDate();
                var dlHour = alarmDate.getHours();
                var dlMin = alarmDate.getMinutes();
                var dlSec = alarmDate.getSeconds();
                var msg1 = "期限の<span>" + dlYear + "/" + dlMonth + "/" + dlDate + " " + dlHour + ":" + dlMin + ":" + dlSec;

                // 引き算して日数(ミリ秒)の差を計算
                var diff2Dates = dnumTarget - dnumNow;
                if( dnumTarget < dnumNow ) {
                    // 期限が過ぎた場合は -1 を掛けて正の値に変換
                    diff2Dates *= -1;
                }

                // 差のミリ秒を、日数・時間・分・秒に分割
                var dDays = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
                diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
                var dHour = diff2Dates / ( 1000 * 60 * 60 );   // 時間
                diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
                var dMin = diff2Dates / ( 1000 * 60 );   // 分
                diff2Dates = diff2Dates % ( 1000 * 60 );
                var dSec = diff2Dates / 1000;   // 秒
                var msg2 = Math.floor(dDays) + "日" + Math.floor(dHour) + "時間" + Math.floor(dMin) + "分" + Math.floor(dSec) + "秒";

                // 表示文字列の作成
                var msg;
                if( dnumTarget > dnumNow ) {
                    // まだ期限が来ていない場合
                    msg = msg1 + "までは、あと" + msg2 + "です。";
                }
                else {
                    // 期限が過ぎた場合
                    msg = msg1 + "は、既に" + msg2 + "前に過ぎました。";
                }

                // 作成した文字列を表示
                var settingtime = document.getElementById("settime");
                settingtime.innerHTML = msg;
            }

            var clearAllTimer = function(){
                var TIMER_FLAGS= JSON.parse(localStorage.getItem("TIMER_FLAGS"));
                console.log("call cleraAllTimer "+JSON.stringify(TIMER_FLAGS));
                // 1秒ごとに実行
                /*
                plugin.TimerPlugin.addInterval(
                    showCountdown(alarmDate),
                    1000,
                    // SUCCESS
                    function(){
                        console.log("TimerPlugin SUCCESS");
                    }, 
                    // ERROR
                    function(){
                        console.log("TimerPlugin ERROR");
                    }
                );
                */

                // reset  all interval
                for(key in TIMER_FLAGS) { // 配列の長さ分の繰り返し
                    clearInterval(TIMER_FLAGS[key]);
                    console.log("clear interval ID : "+TIMER_FLAGS[key]);
                }
            }

            var alarmDate = new Date();
            if(id=='10min'){    
                //alarmDate.setSeconds(alarmDate.getSeconds() + 10);
                alarmDate.setMinutes(alarmDate.getMinutes()+10)
            }else if(id=='5min'){
                //alarmDate.setSeconds(alarmDate.getSeconds() + 5);
                alarmDate.setMinutes(alarmDate.getMinutes()+5)
            }else if(id=='1min'){
                //alarmDate.setSeconds(alarmDate.getSeconds() + 1);
                alarmDate.setMinutes(alarmDate.getMinutes()+1)
            }
            
            // if push STOP button, then clear all timmer
            var LOCALSTORAGE_TIMER_FLAGS=localStorage.getItem("TIMER_FLAGS");
            if(LOCALSTORAGE_TIMER_FLAGS !== undefined){
                var TIMER_FLAGS= JSON.parse(LOCALSTORAGE_TIMER_FLAGS);
                console.log("call cleraAllTimer "+TIMER_FLAGS);
                // 1秒ごとに実行
                /*
                plugin.TimerPlugin.addInterval(
                    showCountdown(alarmDate),
                    1000,
                    // SUCCESS
                    function(){
                        console.log("TimerPlugin SUCCESS");
                    }, 
                    // ERROR
                    function(){
                        console.log("TimerPlugin ERROR");
                    }
                );
                */

                // reset  all interval
                for(key in TIMER_FLAGS) { // 配列の長さ分の繰り返し
                    clearInterval(TIMER_FLAGS[key]);
                    console.log("clear interval ID : "+TIMER_FLAGS[key]);
                }
            }

            if(id=='stop'){
                console.log("STOP");
            // else, once stop all timer, and add new timmer
            }else{
                var intervalID = setInterval(function(){showCountdown(alarmDate)},1000);
                var TIMER_FLAGS = {intervalID:intervalID};
                console.log(JSON.stringify(TIMER_FLAGS));
                localStorage.setItem("TIMER_FLAGS",JSON.stringify(TIMER_FLAGS));

                // set wakeup timer
                navigator.plugins.alarm.set(alarmDate, 
                function(){
                    // SUCCESS
                    navigator.vibrate([100,100]);
                }, 
                function(){
                    // ERROR
                    navigator.vibrate([100,100,100,100]);
                    alert("エラー");
                })
            }

        });
    }
};

app.initialize();