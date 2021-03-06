"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_scatterjsCore=require("scatterjs-core"),proxy=function(a,b){return new Proxy(a,b)},ScatterTron=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2.default)(this,b),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,_scatterjsCore.Blockchains.TRX,_scatterjsCore.PluginTypes.BLOCKCHAIN_SUPPORT))}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"hookProvider",value:function hookProvider(){throw new Error("Tron hook provider not enabled yet.")}},{key:"signatureProvider",value:function signatureProvider(){0>=arguments.length?void 0:arguments[0];return function(a,b){2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(a=_scatterjsCore.Network.fromJson(a),!a.isValid())throw Error.noNetwork();var c=function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return function(d){return new Promise(function(e){var f={transaction:d,participants:[b.defaultAddress.base58]},g={transaction:f,blockchain:_scatterjsCore.Blockchains.TRX,network:a,requiredFields:{},abi:c};_scatterjsCore.SocketService.sendApiRequest({type:"requestSignature",payload:g}).then(function(a){return e(a.signatures)})})}};return b.trx.sign=c(),proxy(b,{get:function get(d,a){return console.log("method",a),"function"==typeof d[a]?function(){for(var b=arguments.length,e=Array(b),f=0;f<b;f++)e[f]=arguments[f];return console.log("args",e),"contract"===a?proxy(d[a].apply(d,e),{get:function get(f,a){return console.log("a",f,a),d.trx.sign=c({abi:e[0],address:e[1],method:a}),f[a]}}):d[a].apply(d,e)}:d[a]}});//
// return proxy(_tron, {
//     get(instance, method) {
//         console.log('method', method);
//         if(typeof instance[method] === 'function') return (...args) => {
//             console.log('args', args);
//
//             // const rqf = args.find(arg => arg.hasOwnProperty('requiredFields'));
//
//             return instance[method](...args)
//
//         };
//         else return instance[method];
//
//     }
// });
// _tron.trx.sign = signargs => {
//     return new Promise(resolve => {
//         const transaction = {
//             transaction:signargs,
//             participants:[_tron.defaultAddress.base58],
//         };
//         const payload = { transaction, blockchain:Blockchains.TRX, network, requiredFields:{} };
//         SocketService.sendApiRequest({
//             type:'requestSignature',
//             payload
//         }).then(x => resolve(x.signatures))
//     })
// };
//
// return _tron;
}}}]),b}(_scatterjsCore.Plugin);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=ScatterTron,"undefined"!=typeof window&&(window.ScatterTron=ScatterTron);