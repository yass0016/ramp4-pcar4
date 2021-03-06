// a 3D esri map
// extra fancy and likely out of scope for initial release
// TODO add proper comments

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import MapBase from './MapBase';

// naming RampMap3D, to align with calling the 2D version RampMap
export class RampMap3D extends MapBase {

    _innerView: esri.SceneView;

    constructor (infoBundle: InfoBundle, config: any, targetDiv: string) {
        // TODO massage incoming config to something that conforms to esri.MapProperties interface
        const esriConfig = config; // this becomes real logic

        super(infoBundle, esriConfig)

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        /* // need to add SceneView to our bundle for this to work. later!
        this._innerView = new esriBundle.SceneView({
            map: this._innerMap,
            container: targetDiv,
            center: [-76.772, 44.423],
            zoom: 10
        });
        */
    }
}