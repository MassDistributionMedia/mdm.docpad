/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wave-out4',
                            symbolName: 'wave-out',
                            type: 'rect',
                            rect: ['498', '263', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'wave-out5',
                            symbolName: 'wave-out',
                            type: 'rect',
                            rect: ['498', '263', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'wave-out6',
                            symbolName: 'wave-out',
                            type: 'rect',
                            rect: ['499', '263', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'first_long_wire',
                            type: 'rect',
                            rect: ['0px', '479px', '3px', '3px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'small_wire_up',
                            display: 'none',
                            type: 'rect',
                            rect: ['333px', '482px', '3px', '3px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'small_wire_upCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['658px', '96px', '3px', '96px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'first_wire_in',
                            display: 'none',
                            type: 'rect',
                            rect: ['334px', '432px', '3px', '3px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'first_wire_inCopy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['497px', '94px', '3px', '3px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'small_wire_in',
                            display: 'none',
                            type: 'rect',
                            rect: ['496px', '435px', '3px', '3px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'small_wire_inCopy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['496px', '265px', '3px', '171px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180']]
                        },
                        {
                            id: 'node1',
                            symbolName: 'node1',
                            display: 'none',
                            type: 'rect',
                            rect: ['497px', '264', '9', '9', 'auto', 'auto']
                        },
                        {
                            id: 'mini-node-out',
                            symbolName: 'mini-node-out',
                            type: 'rect',
                            rect: ['-1px', '-4px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'mini-node-up',
                            symbolName: 'mini-node-up',
                            type: 'rect',
                            rect: ['492px', '259px', '11', '11', 'auto', 'auto']
                        },
                        {
                            id: 'mini-node-out1',
                            display: 'block',
                            type: 'ellipse',
                            rect: ['494px', '259px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(138,188,235,1.00)"],
                            stroke: [0,"rgba(192,192,192,1.00)","solid"]
                        },
                        {
                            id: 'tech-text',
                            type: 'text',
                            rect: ['267px', '246px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">TECHNOLOGY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;NEVER STOPS</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(229,231,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '999px', '666px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(58,125,216,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    data: [
                        [
                            "eid3669",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5041",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5042",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5043",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5044",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5045",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid30",
                            "width",
                            750,
                            500,
                            "linear",
                            "${first_wire_in}",
                            '3px',
                            '164px'
                        ],
                        [
                            "eid957",
                            "left",
                            0,
                            500,
                            "linear",
                            "${mini-node-out1}",
                            '0px',
                            '331px'
                        ],
                        [
                            "eid1025",
                            "left",
                            750,
                            500,
                            "linear",
                            "${mini-node-out1}",
                            '331px',
                            '494px'
                        ],
                        [
                            "eid1139",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            '494px',
                            '494px'
                        ],
                        [
                            "eid4",
                            "width",
                            0,
                            500,
                            "linear",
                            "${first_long_wire}",
                            '3px',
                            '336px'
                        ],
                        [
                            "eid1216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${node1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1217",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${node1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2553",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2554",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${first_wire_in}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1213",
                            "display",
                            750,
                            0,
                            "linear",
                            "${first_wire_in}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3812",
                            "display",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3813",
                            "display",
                            3130,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1211",
                            "display",
                            500,
                            0,
                            "linear",
                            "${small_wire_up}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5046",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5047",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5048",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5049",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5050",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_up}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid10",
                            "height",
                            500,
                            250,
                            "linear",
                            "${small_wire_up}",
                            '3px',
                            '49px'
                        ],
                        [
                            "eid47",
                            "height",
                            1250,
                            500,
                            "linear",
                            "${small_wire_in}",
                            '3px',
                            '171px'
                        ],
                        [
                            "eid3810",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5051",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5052",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5053",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5054",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5055",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_upCopy}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3667",
                            "display",
                            0,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3668",
                            "display",
                            2130,
                            0,
                            "linear",
                            "${small_wire_inCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3811",
                            "height",
                            3130,
                            370,
                            "linear",
                            "${small_wire_upCopy}",
                            '3px',
                            '96px'
                        ],
                        [
                            "eid3762",
                            "display",
                            0,
                            0,
                            "linear",
                            "${first_wire_inCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3763",
                            "display",
                            2630,
                            0,
                            "linear",
                            "${first_wire_inCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3764",
                            "width",
                            2630,
                            500,
                            "linear",
                            "${first_wire_inCopy5}",
                            '3px',
                            '164px'
                        ],
                        [
                            "eid1214",
                            "display",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1215",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${small_wire_in}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5056",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5057",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5058",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5059",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5060",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${small_wire_in}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3670",
                            "height",
                            2130,
                            500,
                            "linear",
                            "${small_wire_inCopy2}",
                            '3px',
                            '171px'
                        ],
                        [
                            "eid962",
                            "top",
                            0,
                            500,
                            "linear",
                            "${mini-node-out1}",
                            '480px',
                            '476px'
                        ],
                        [
                            "eid1017",
                            "top",
                            500,
                            250,
                            "linear",
                            "${mini-node-out1}",
                            '476px',
                            '429px'
                        ],
                        [
                            "eid1026",
                            "top",
                            750,
                            500,
                            "linear",
                            "${mini-node-out1}",
                            '429px',
                            '430px'
                        ],
                        [
                            "eid1084",
                            "top",
                            1250,
                            500,
                            "linear",
                            "${mini-node-out1}",
                            '430px',
                            '259px'
                        ],
                            [ "eid595", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${node1}', [] ] ],
                            [ "eid317", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${mini-node-out}', [] ] ],
                            [ "eid1758", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${wave-out4}', [] ] ],
                            [ "eid4197", "trigger", 2630, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${mini-node-up}', [] ] ],
                            [ "eid2189", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${wave-out5}', [] ] ],
                            [ "eid2220", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${wave-out6}', [] ] ]
                    ]
                }
            },
            "mini-node-out": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-9px', '479px', '0px', '0px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'mini-node-out1',
                            stroke: [0, 'rgba(192,192,192,1.00)', 'none'],
                            display: 'none',
                            fill: ['rgba(138,188,235,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1330,
                    autoPlay: false,
                    data: [
                        [
                            "eid106",
                            "height",
                            80,
                            250,
                            "easeOutElastic",
                            "${mini-node-out1}",
                            '0px',
                            '11px'
                        ],
                        [
                            "eid114",
                            "left",
                            80,
                            250,
                            "easeOutElastic",
                            "${mini-node-out1}",
                            '498px',
                            '493px'
                        ],
                        [
                            "eid122",
                            "left",
                            580,
                            250,
                            "linear",
                            "${mini-node-out1}",
                            '493px',
                            '330px'
                        ],
                        [
                            "eid131",
                            "left",
                            1080,
                            250,
                            "linear",
                            "${mini-node-out1}",
                            '330px',
                            '-9px'
                        ],
                        [
                            "eid109",
                            "border-width",
                            80,
                            250,
                            "easeOutElastic",
                            "${mini-node-out1}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid2431",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2432",
                            "display",
                            80,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "width",
                            80,
                            250,
                            "easeOutElastic",
                            "${mini-node-out1}",
                            '0px',
                            '11px'
                        ],
                        [
                            "eid115",
                            "top",
                            80,
                            250,
                            "easeOutElastic",
                            "${mini-node-out1}",
                            '268px',
                            '263px'
                        ],
                        [
                            "eid117",
                            "top",
                            330,
                            250,
                            "linear",
                            "${mini-node-out1}",
                            '263px',
                            '432px'
                        ],
                        [
                            "eid128",
                            "top",
                            830,
                            250,
                            "linear",
                            "${mini-node-out1}",
                            '432px',
                            '478px'
                        ],
                        [
                            "eid130",
                            "top",
                            1330,
                            0,
                            "linear",
                            "${mini-node-out1}",
                            '478px',
                            '479px'
                        ]
                    ]
                }
            },
            "node1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-26px', '-26px', '3px', '3px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'node1Copy2',
                            stroke: [0, 'rgba(0,82,214,0.79)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(13,10,155,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(64,60,242,1.00)', 0], ['rgba(13,10,155,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9px', '9px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "pulse-node1": 250
                    },
                    data: [
                        [
                            "eid808",
                            "border-width",
                            0,
                            250,
                            "easeOutCirc",
                            "${node1Copy2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid69",
                            "top",
                            0,
                            250,
                            "easeOutElastic",
                            "${node1Copy2}",
                            '0px',
                            '-17px'
                        ],
                        [
                            "eid535",
                            "top",
                            250,
                            500,
                            "easeOutCirc",
                            "${node1Copy2}",
                            '-17px',
                            '-26px'
                        ],
                        [
                            "eid544",
                            "top",
                            750,
                            500,
                            "easeOutSine",
                            "${node1Copy2}",
                            '-26px',
                            '-18px'
                        ],
                        [
                            "eid72",
                            "height",
                            0,
                            250,
                            "easeOutElastic",
                            "${node1Copy2}",
                            '3px',
                            '33px'
                        ],
                        [
                            "eid533",
                            "height",
                            250,
                            500,
                            "easeOutCirc",
                            "${node1Copy2}",
                            '33px',
                            '48px'
                        ],
                        [
                            "eid541",
                            "height",
                            750,
                            500,
                            "easeOutSine",
                            "${node1Copy2}",
                            '48px',
                            '33px'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            250,
                            "easeOutElastic",
                            "${node1Copy2}",
                            '0px',
                            '-16px'
                        ],
                        [
                            "eid536",
                            "left",
                            250,
                            500,
                            "easeOutCirc",
                            "${node1Copy2}",
                            '-16px',
                            '-24px'
                        ],
                        [
                            "eid543",
                            "left",
                            750,
                            500,
                            "easeOutSine",
                            "${node1Copy2}",
                            '-24px',
                            '-15px'
                        ],
                        [
                            "eid74",
                            "width",
                            0,
                            250,
                            "easeOutElastic",
                            "${node1Copy2}",
                            '3px',
                            '33px'
                        ],
                        [
                            "eid534",
                            "width",
                            250,
                            500,
                            "easeOutCirc",
                            "${node1Copy2}",
                            '33px',
                            '48px'
                        ],
                        [
                            "eid542",
                            "width",
                            750,
                            500,
                            "easeOutSine",
                            "${node1Copy2}",
                            '48px',
                            '33px'
                        ]
                    ]
                }
            },
            "wave-out": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-999px', '-998px', '1999px', '1999px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'wave-out',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)', [50, 50, 'true', 'farthest-corner', [['rgba(27,38,115,0.06)', 1], ['rgba(27,38,115,0.51)', 48], ['rgba(138,188,235,0.77)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1717",
                            "background-color",
                            1800,
                            0,
                            "linear",
                            "${wave-out}",
                            'rgba(192,192,192,0.00)',
                            'rgba(192,192,192,0.00)'
                        ],
                        [
                            "eid1698",
                            "width",
                            0,
                            2250,
                            "linear",
                            "${wave-out}",
                            '0px',
                            '1999px'
                        ],
                        [
                            "eid1697",
                            "height",
                            0,
                            2250,
                            "linear",
                            "${wave-out}",
                            '0px',
                            '1999px'
                        ],
                        [
                            "eid1702",
                            "top",
                            0,
                            2250,
                            "linear",
                            "${wave-out}",
                            '0px',
                            '-998px'
                        ],
                        [
                            "eid1706",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${wave-out}",
                            [50,50,true,'farthest-corner',[['rgba(27,38,115,0.06)',1],['rgba(27,38,115,0.51)',48],['rgba(138,188,235,0.77)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(27,38,115,0.06)',1],['rgba(27,38,115,0.51)',48],['rgba(138,188,235,0.77)',100]]]
                        ],
                        [
                            "eid1701",
                            "left",
                            0,
                            2250,
                            "linear",
                            "${wave-out}",
                            '0px',
                            '-999px'
                        ]
                    ]
                }
            },
            "mini-node-up": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['162px', '-270px', '0px', '0px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'mini-node-up1',
                            stroke: [3, 'rgb(192, 192, 192)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(138,188,235,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '11px', '11px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid4304",
                            "height",
                            0,
                            250,
                            "easeOutElastic",
                            "${mini-node-up1}",
                            '0px',
                            '11px'
                        ],
                        [
                            "eid4305",
                            "width",
                            0,
                            250,
                            "easeOutElastic",
                            "${mini-node-up1}",
                            '0px',
                            '11px'
                        ],
                        [
                            "eid4146",
                            "left",
                            250,
                            0,
                            "linear",
                            "${mini-node-up1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4153",
                            "left",
                            500,
                            250,
                            "linear",
                            "${mini-node-up1}",
                            '0px',
                            '162px'
                        ],
                        [
                            "eid4154",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${mini-node-up1}",
                            '162px',
                            '162px'
                        ],
                        [
                            "eid4150",
                            "top",
                            250,
                            250,
                            "linear",
                            "${mini-node-up1}",
                            '0px',
                            '-169px'
                        ],
                        [
                            "eid4156",
                            "top",
                            750,
                            250,
                            "linear",
                            "${mini-node-up1}",
                            '-169px',
                            '-270px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tech_edgeActions.js");
})("EDGE-73945849");
