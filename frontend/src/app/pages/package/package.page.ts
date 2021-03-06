import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Package } from 'src/app/models/Package';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { ClassesSlideComponent } from './slides/classes/classes.slide.component';
import { OptionsSlidesComponent } from './slides/options.slides.component';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage extends PageWithSlides implements OnInit {

  @ViewChild(ClassesSlideComponent)
  private classesSlide: ClassesSlideComponent;

  @ViewChild(OptionsSlidesComponent)
  private optionsSlide: OptionsSlidesComponent;

  _new: boolean;
  _model: Package;

  constructor(
    private route: ActivatedRoute,
    private storage: PackagesStorageService,
    private toast: ToastService) {

    super(["package", "options", "classes"]);
    let id = this.route.snapshot.paramMap.get('id');

    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new Package(Guid.create().toString());
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }

  }

  ngOnInit(): void {
    this.updateSegment();
  }

  save() {
    if (this._new == true) {
      this.storage.add(this._model);
      this._new = false;
      this.toast.presentToast('Package Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Package Atualizado!')
    }
  }



  ionViewWillEnter(): void {
    this.classesSlide.updateSlide();
  }

}
