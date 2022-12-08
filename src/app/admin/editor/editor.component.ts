import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import GrapesJsPresetWebpage from 'grapesjs-preset-webpage';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private editor: any;

  constructor() { }

  ngOnInit(): void {
    this.editor = this.initEditor();
    this.editor.on('asset:add', () => {
      console.log('Asset add fired');
      // this.editor.runCommand('open-assets');
    });

    this.editor.on('component:mount', (model: any) => {
      this.editor.select(model);
      const openBl = this.editor.Panels.getButton('views', 'open-tm');
      openBl && openBl.set('active', 1)
    });    

    this.editor.on('asset:upload:response', (response: any) => {
      this.editor.AssetManager.add(response);
    });
  }

  private initEditor() {
    return grapesjs.init({
      container: '#gjs',
      autorender: true,
      forceClass: false,
      style: '',
      plugins: [GrapesJsPresetWebpage],
      pluginsOpts: {
        GrapesJsPresetWebpage: {
          navbarOpts: true,
          countdownOpts: true,
          formsOpts: true,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3', 'map'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      },
      assetManager: {
        uploadText: 'Add image through link or upload image',
        modalTitle: 'Select Image',
        openAssetsOnDrop: 0,
        inputPlaceholder: 'http://url/to/the/image.jpg',
        addBtnText: 'Add image',
        uploadFile: (e: any) => {
          const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        },
        handleAdd: (textFromInput: any) => {
          this.editor.AssetManager.add(textFromInput);
        },
        autoAdd: true
      },
      canvas: {
        styles: [
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
        ],
        scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']
      },
      blockManager: {
        blocks: [
          // {
          //   id: 'section', // id is mandatory
          //   label: '<b>Section</b>', // You can use HTML/SVG inside labels
          //   attributes: { class:'gjs-block-section' },
          //   content: `<section>
          //     <h1>This is a simple title</h1>
          //     <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          //   </section>`,
          // }, {
          //   id: 'text',
          //   label: 'Text',
          //   content: '<div data-gjs-type="text">Insert your text here</div>',
          // }, {
          //   id: 'image',
          //   label: 'Image',
          //   // Select the component once it's dropped
          //   select: true,
          //   // You can pass components as a JSON instead of a simple HTML string,
          //   // in this case we also use a defined component type `image`
          //   content: { type: 'image' },
          //   // This triggers `active` event on dropped components and the `image`
          //   // reacts by opening the AssetManager
          //   activate: true,
          // }
        ]
      },
    });
  }
}
