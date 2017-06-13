/**
 * Ascii Animation controllers
 * @author Sanjeev Shrestha - 984970
 */
"use strict";
/**
 * Pass in windows and document object
 */
(function (win, doc) {
    /**
     * Return the font size in pt
     * @param {*} txtSize txtSize value to be used in switch case
     */
    var getSize = function (txtSize) {
        var size = 12;
        switch (txtSize) {
            case 't':
                size = 7;
                break;
            case 's':
                size = 10;
                break;
            case 'm':
                size = 12;
                break;
            case 'l':
                size = 16;
                break;
            case 'xl':
                size = 24;
                break;
            case 'xxl':
                size = 32;
                break;
            default:
                size = 12;
                break;
        }
        return size + "pt";
    };

    /**
     * Speed Control object to store current speed level
     * 
     */
    var SpeedControl = function () {
        var me = this;
        me.speed = 250;
        me.getSpeed = function () {
            return me.speed;
        };
        me.setSpeed = function (timeout) {
            me.speed = timeout;

        };
    };

    /**
     * Animator function to animate the text in text box
     * @param {*} animation  animation text from animation.js
     * @param {*} textObject textarea object to be used as animation stage
     * @param {*} time timeout for the interval
     */
    var Animator = function (animation, textObject, time) {
        var me = this;
        var animation = animation;
        var frames = [];
        var currentFrame = 0;
        var timer = null;
        /**
         * Initialize the animator, split the text into frames
         */
        me.initialize = function () {
            frames = animation.split("=====\n");
            currentFrame = 0;
        };

        /**
         * Runner that runs through frames to animate
         */
        me.run = function () {
            textObject.value = frames[currentFrame];
            currentFrame = (currentFrame + 1) % frames.length;

        };

        /**
         * Start Animation control
         */
        me.start = function () {
            timer = setInterval(me.run, time);
        };
        /**
         * Stop Animation Control
         */
        me.stop = function () {
            clearInterval(timer);
            textObject.value = animation;
        };

        /**
         * Set the animation when there are changes from user input in the text box
         */
        me.setAnimation = function (txtAnimation) {
            animation = txtAnimation;
            frames = animation.split("=====\n");
            currentFrame = 0;

        };

        /**
         * Set the speed of animation from speed control
         */
        me.setSpeed = function (time) {
            clearInterval(timer);
            timer = setInterval(me.run, time);
        };
    };

    /**
     * Global animator object
     */
    var animator = null;
    /**
     * Global Speed Object
     */
    var objSpeed = new SpeedControl();
  
    /**
     * Set up the animation initially to avoid undefined errors.
     */
    var setup = function () {
        var textObject = document.getElementById("txtAnimationStage");
        var animation = ANIMATIONS[document.getElementById("animation").value];
        textObject.value = animation;
        animator = new Animator(animation, textObject, objSpeed.getSpeed());
        animator.initialize();
    };


    /**
     * Event handler, Binds controls to events after document has been loaded
     */
    var bindControls = function () {
        //Setup the animator
        setup();

        /**
         * Click handler for start button
         */
        doc.getElementById("btnStart").onclick = function () {
            if (animator) {
                animator.setAnimation(document.getElementById("txtAnimationStage").value);
                animator.start();
                document.getElementById("btnStop").disabled = false;
                document.getElementById("btnStart").disabled = true;
                document.getElementById("animation").disabled = true;

            }
        };

        /**
         * Click handler for stop button
         */
        doc.getElementById("btnStop").onclick = function () {
            if (animator) {
                animator.stop();
                document.getElementById("btnStop").disabled = true;
                document.getElementById("btnStart").disabled = false;
                document.getElementById("animation").disabled = false;

            }
        };
        /**
         * Change event handler for animation change
         */
        doc.getElementById("animation").onchange = function (event) {
            if (animator) {
                animator.stop();
            }
            setup();
        };

        /**
         * Change event handler for size
         */
        doc.getElementById("size").onchange = function (event) {
            document.getElementById("txtAnimationStage").style.fontSize = getSize(event.target.value);
        };

        /**
         * Change handler for speed checkbox. This updates the global speed object
         */
        doc.getElementById("speed").onchange = function (event) {
            if (animator) {
                if (event.target.checked) {
                    objSpeed.setSpeed(50);
                }
                else {
                    objSpeed.setSpeed(250);
                }
                animator.setSpeed(objSpeed.getSpeed());
            }
        };
    };
    win.onload = bindControls;
})(window, document);