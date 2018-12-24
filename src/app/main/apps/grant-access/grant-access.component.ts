import { Component, OnInit, ViewChild } from '@angular/core';


import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
    selector: 'app-grant-access',
    templateUrl: './grant-access.component.html',
    styleUrls: ['./grant-access.component.scss']
})
export class GrantAccessComponent implements OnInit {


    @ViewChild('scanner')
    scanner: ZXingScannerComponent;

    hasDevices: boolean;
    hasPermission: boolean;
    qrResultString: string;
    qrResult: Result;

    availableDevices: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo;

    constructor() { }

    ngOnInit(): void {

        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasDevices = true;
            this.availableDevices = devices;

            // selects the devices's back camera by default
            // for (const device of devices) {
            //     if (/back|rear|environment/gi.test(device.label)) {
            //         this.scanner.changeDevice(device);
            //         this.currentDevice = device;
            //         break;
            //     }
            // }
        });

        this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
        this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
        this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
    }

    displayCameras(cameras: MediaDeviceInfo[]): void {
        // console.debug('Devices: ', cameras);
        this.availableDevices = cameras;
    }

    handleQrCodeResult(resultString: string): void {
        // console.debug('Result: ', resultString);
        this.qrResultString = resultString;
    }

    onDeviceSelectChange(selectedValue: string): void {
        // console.debug('Selection changed: ', selectedValue);
        this.currentDevice = this.scanner.getDeviceById(selectedValue);
    }

    stateToEmoji(state: boolean): string {

        const states = {
            // not checked
            undefined: '❔',
            // failed to check
            null: '⭕',
            // success
            true: '✔',
            // can't touch that
            false: '❌'
        };

        return states['' + state];
    }

}
