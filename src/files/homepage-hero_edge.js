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
                            id: 'big_bg',
                            type: 'rect',
                            rect: ['0px', '0px', '843px', '666px', 'auto', 'auto'],
                            fill: ["rgba(7,82,184,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'small_bottom_blue',
                            type: 'rect',
                            rect: ['-83px', '612px', '423px', '260px', 'auto', 'auto'],
                            fill: ["rgba(10,5,122,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],['43']]
                        },
                        {
                            id: 'bottom_right_rect',
                            display: 'none',
                            type: 'rect',
                            rect: ['546px', '533px', '423px', '298px', 'auto', 'auto'],
                            fill: ["rgba(0,82,214,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],['-39']]
                        },
                        {
                            id: 'big_flat_top',
                            type: 'rect',
                            rect: ['752px', 'auto', '822px', '246px', 'auto', '84px'],
                            fill: ["rgba(138,188,235,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],['-39'],['8'],['0.76055','1.23353']]
                        },
                        {
                            id: 'long_strip-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['328px', '526px', '615px', '59px', 'auto', 'auto'],
                            fill: ["rgba(33,29,130,1.00)",[270,[['rgba(73,134,208,1.00)',0],['rgba(86,161,240,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],['-39'],['-39'],['0.78201']]
                        },
                        {
                            id: 'circle_hole',
                            type: 'ellipse',
                            rect: ['351px', '359px', '223px', '223px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(12,39,183,1.00)",[50,50,true,'farthest-corner',[['rgba(11,41,185,1.00)',0],['rgba(13,27,153,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            boxShadow: ["inset", 0, 228, 7, 1, "rgba(9,6,92,0.58)"]
                        },
                        {
                            id: 'dark_blue_vert_left_rect',
                            type: 'rect',
                            rect: ['1002px', '-1px', '177px', '666px', 'auto', 'auto'],
                            fill: ["rgba(13,10,155,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", -7, 7, 27, 1, "rgba(8,2,66,0.31)"]
                        },
                        {
                            id: 'skinny_strip_edge',
                            display: 'none',
                            type: 'rect',
                            rect: ['9px', '-117px', '580px', '458px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(4,98,200,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            boxShadow: ["", 0, 33, 29, 1, "rgba(17,26,115,0.43)"],
                            transform: [[],['-39'],['-39'],['1.32755','0.10766']]
                        },
                        {
                            id: 'rotate_down_top_rect',
                            type: 'rect',
                            rect: ['-209px', '-499px', '929px', '499px', 'auto', 'auto'],
                            fill: ["rgba(68,150,244,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"],
                            boxShadow: ["", 0, 1, 1, 0, "rgba(10,17,82,0.20)"],
                            transform: [[],['-39']]
                        },
                        {
                            id: 'long_strip-2Copy',
                            type: 'rect',
                            rect: ['775px', '159px', '627px', '59px', 'auto', 'auto'],
                            fill: ["rgba(46,119,212,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            transform: [[],['-39'],['-39'],['0.36353']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['122px', '223px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 900;\">YOUR BRAND</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 900;\">​ IS ART.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(10,37,118,0.71)", "700", "none", "", "break-word", "nowrap"]
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
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid1616",
                            "left",
                            1750,
                            500,
                            "easeOutSine",
                            "${small_bottom_blue}",
                            '-233px',
                            '-83px'
                        ],
                        [
                            "eid3976",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1107",
                            "display",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1564",
                            "left",
                            2500,
                            750,
                            "easeOutSine",
                            "${circle_hole}",
                            '1031px',
                            '351px'
                        ],
                        [
                            "eid2663",
                            "boxShadow.color",
                            2500,
                            0,
                            "linear",
                            "${circle_hole}",
                            'rgba(9,6,92,0.58)',
                            'rgba(9,6,92,0.58)'
                        ],
                        [
                            "eid108",
                            "boxShadow.spread",
                            1250,
                            500,
                            "easeOutSine",
                            "${rotate_down_top_rect}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53330",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53331",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53332",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53333",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53334",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${big_bg}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5152",
                            "rotateZ",
                            1250,
                            500,
                            "easeOutSine",
                            "${rotate_down_top_rect}",
                            '0deg',
                            '-39deg'
                        ],
                        [
                            "eid257",
                            "boxShadow.offsetV",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid6",
                            "left",
                            500,
                            500,
                            "easeOutSine",
                            "${big_bg}",
                            '832px',
                            '0px'
                        ],
                        [
                            "eid261",
                            "scaleY",
                            1875,
                            625,
                            "easeOutSine",
                            "${skinny_strip_edge}",
                            '0.10766',
                            '-0.09818'
                        ],
                        [
                            "eid2646",
                            "background-color",
                            2500,
                            0,
                            "linear",
                            "${circle_hole}",
                            'rgba(12,39,183,1.00)',
                            'rgba(12,39,183,1.00)'
                        ],
                        [
                            "eid5468",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53335",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53336",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53337",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53338",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53339",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${rotate_down_top_rect}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2853",
                            "left",
                            2500,
                            500,
                            "easeOutSine",
                            "${long_strip-2}",
                            '703px',
                            '328px'
                        ],
                        [
                            "eid3314",
                            "boxShadow.offsetV",
                            2500,
                            750,
                            "easeOutSine",
                            "${circle_hole}",
                            '228px',
                            '33px'
                        ],
                        [
                            "eid255",
                            "boxShadow.spread",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid104",
                            "boxShadow.offsetV",
                            1250,
                            500,
                            "easeOutSine",
                            "${rotate_down_top_rect}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid2662",
                            "background-image",
                            2500,
                            0,
                            "linear",
                            "${circle_hole}",
                            [50,50,true,'farthest-corner',[['rgba(11,41,185,1.00)',0],['rgba(13,27,153,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(11,41,185,1.00)',0],['rgba(13,27,153,1.00)',100]]]
                        ],
                        [
                            "eid2854",
                            "top",
                            2500,
                            500,
                            "easeOutSine",
                            "${long_strip-2}",
                            '221px',
                            '526px'
                        ],
                        [
                            "eid1565",
                            "top",
                            2500,
                            750,
                            "easeOutSine",
                            "${circle_hole}",
                            '-192px',
                            '359px'
                        ],
                        [
                            "eid2",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53340",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53341",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53342",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53343",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53344",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${dark_blue_vert_left_rect}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1615",
                            "top",
                            1750,
                            500,
                            "easeOutSine",
                            "${small_bottom_blue}",
                            '733px',
                            '612px'
                        ],
                        [
                            "eid2395",
                            "top",
                            1500,
                            500,
                            "easeOutSine",
                            "${bottom_right_rect}",
                            '276px',
                            '505px'
                        ],
                        [
                            "eid2396",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${bottom_right_rect}",
                            '505px',
                            '505px'
                        ],
                        [
                            "eid2394",
                            "left",
                            1500,
                            500,
                            "easeOutSine",
                            "${bottom_right_rect}",
                            '867px',
                            '574px'
                        ],
                        [
                            "eid2401",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${bottom_right_rect}",
                            '574px',
                            '574px'
                        ],
                        [
                            "eid6167",
                            "bottom",
                            2500,
                            750,
                            "easeOutQuad",
                            "${big_flat_top}",
                            '650px',
                            '84px'
                        ],
                        [
                            "eid254",
                            "boxShadow.blur",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid106",
                            "boxShadow.offsetH",
                            1250,
                            500,
                            "easeOutSine",
                            "${rotate_down_top_rect}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            500,
                            "easeOutSine",
                            "${dark_blue_vert_left_rect}",
                            '1002px',
                            '822px'
                        ],
                        [
                            "eid4239",
                            "top",
                            1875,
                            625,
                            "easeOutSine",
                            "${long_strip-2Copy}",
                            '159px',
                            '303px'
                        ],
                        [
                            "eid2880",
                            "display",
                            0,
                            0,
                            "linear",
                            "${long_strip-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2879",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${long_strip-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid252",
                            "boxShadow.offsetH",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4177",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bottom_right_rect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4178",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${bottom_right_rect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "boxShadow.blur",
                            1250,
                            500,
                            "easeOutSine",
                            "${rotate_down_top_rect}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid259",
                            "boxShadow.color",
                            1875,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            'rgba(17,26,115,0.43)',
                            'rgba(17,26,115,0.43)'
                        ],
                        [
                            "eid4240",
                            "left",
                            1875,
                            625,
                            "easeOutSine",
                            "${long_strip-2Copy}",
                            '775px',
                            '597px'
                        ],
                        [
                            "eid1440",
                            "display",
                            0,
                            0,
                            "linear",
                            "${big_flat_top}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1441",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${big_flat_top}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1025",
                            "-webkit-transform-origin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53345",
                            "-moz-transform-origin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53346",
                            "-ms-transform-origin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53347",
                            "msTransformOrigin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53348",
                            "-o-transform-origin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid53349",
                            "transform-origin",
                            2500,
                            0,
                            "easeInQuad",
                            "${skinny_strip_edge}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3455",
                            "boxShadow.blur",
                            2500,
                            750,
                            "easeOutSine",
                            "${circle_hole}",
                            '7px',
                            '1px'
                        ],
                        [
                            "eid6166",
                            "left",
                            2500,
                            750,
                            "easeOutQuad",
                            "${big_flat_top}",
                            '752px',
                            '56px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("homepage-hero_edgeActions.js");
})("EDGE-37101967");
