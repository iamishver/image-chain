import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessInspectComponent } from './access-inspect.component';

describe('AccessInspectComponent', () => {
    let component: AccessInspectComponent;
    let fixture: ComponentFixture<AccessInspectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AccessInspectComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccessInspectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
