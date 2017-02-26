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
        this.receivedEvent('5min');
        this.receivedEvent('10min');
        this.receivedEvent('15min');
        this.receivedEvent('20min');
        this.receivedEvent('25min');
        this.receivedEvent('30min');
        this.receivedEvent('stop');

        // 通知の権限
        cordova.plugins.notification.local.registerPermission(function() {
            console.log("Permitted.");
        });

        cordova.plugins.notification.local.hasPermission(function (granted) {
             console.log("Permitted. "+granted);
        });

        //background mode on
        cordova.plugins.backgroundMode.enable();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log("ID: "+id);
        var button = document.getElementById(id);

        button.addEventListener("click", function() {
                    
            //add setInterval ID
            //localStorage.setItem("TIMER_FLAGS",JSON.stringify({}));
            //console.log('wakeup pushed ' +JSON.stringify(TIMER_FLAGS));

            // ローカルストレージから実行中フラグ(interval ID)を取得
            var LOCALSTORAGE_TIMER_FLAGS=localStorage.getItem("TIMER_FLAGS");

            if(id=='stop'　&& LOCALSTORAGE_TIMER_FLAGS !== undefined){
                console.log("STOP");
                var TIMER_FLAGS= JSON.parse(LOCALSTORAGE_TIMER_FLAGS);
                console.log("call cleraAllTimer "+TIMER_FLAGS);

                // reset  all interval
                for(key in TIMER_FLAGS) { // 配列の長さ分の繰り返し
                    clearInterval(TIMER_FLAGS[key]);
                    console.log("clear interval ID : "+TIMER_FLAGS[key]);
                }

                // ローカルストレージから実行中フラグ(interval ID)を削除
                localStorage.removeItem("TIMER_FLAGS");
                var settingtime = document.getElementById("settime");
                settingtime.innerHTML = "時間を選択してください。";

            // else, once stop all timer, and add new timmer
            }else if(LOCALSTORAGE_TIMER_FLAGS == undefined){
                var alarmDate = new Date();
                //idの形式は必ず **min であることが前提
                var alermMin = Number(id.replace( /min/g , "" ));
                alarmDate.setMinutes(alarmDate.getMinutes()+alermMin);
                var alarmTime=alermMin*60*1000;

                // 画面の実行時間を１秒ごとに更新
                var intervalID = setInterval(function(){showCountdown(alarmDate)},1000);

                // ローカルストレージに実行中フラグ(interval ID)を登録
                var TIMER_FLAGS = {intervalID:intervalID};
                console.log(JSON.stringify(TIMER_FLAGS));
                localStorage.setItem("TIMER_FLAGS",JSON.stringify(TIMER_FLAGS));

                // 目覚まし時間を設定
                var now             = new Date().getTime(),
                _alarmTime_sec_from_now = new Date(now + alarmTime);

                cordova.plugins.notification.local.schedule({
                    text: "Delayed Notification",
                    at: _alarmTime_sec_from_now,
                    led: "FF0000",
                    sound: null
                });

                //show message when setting schedule
                cordova.plugins.notification.local.on("schedule", function(notification) {
                    navigator.vibrate(100);
                }, this);

                //for background
                cordova.plugins.backgroundMode.onactivate = function() { 
                    //show message when reach time
                    cordova.plugins.notification.local.on("trigger", function(notification) {
                        navigator.vibrate(5000);
                    }, this);
                }

                cordova.plugins.notification.local.on('click', function (notification) {
                    showToast('clicked: ' + notification.id);
                }, this);
            }

            var settingtime = document.getElementById("settime");
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
                //var msg1 = "期限の<span>" + dlYear + "/" + dlMonth + "/" + dlDate + " " + dlHour + ":" + dlMin + ":" + dlSec;
                var msg1 = "期限の<span>" + dlHour + ":" + dlMin + ":" + dlSec;

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
                //var msg2 = Math.floor(dDays) + "日" + Math.floor(dHour) + "時間" + Math.floor(dMin) + "分" + Math.floor(dSec) + "秒";
                var msg2 = Math.floor(dMin) + "分" + Math.floor(dSec) + "秒";

                // 表示文字列の作成
                var msg;
                if( dnumTarget > dnumNow ) {
                    // まだ期限が来ていない場合
                    msg = msg1 + "までは、あと" + msg2 + "です。";
                }
                else {
                    // 期限が過ぎた場合
                    msg = msg1 + "は、" + msg2 + "過ぎてます。";
                }

                // 作成した文字列を表示
                var settingtime = document.getElementById("settime");
                settingtime.innerHTML = msg;
            }

            var clearAllTimer = function(){
                var TIMER_FLAGS= JSON.parse(localStorage.getItem("TIMER_FLAGS"));
                console.log("call cleraAllTimer "+JSON.stringify(TIMER_FLAGS));

                // reset  all interval
                for(key in TIMER_FLAGS) { // 配列の長さ分の繰り返し
                    clearInterval(TIMER_FLAGS[key]);
                    console.log("clear interval ID : "+TIMER_FLAGS[key]);
                }
            }

        });
    }
};

app.initialize();