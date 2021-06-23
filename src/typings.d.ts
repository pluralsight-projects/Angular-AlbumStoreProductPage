/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// declare the type for since, which is a global name added by the jasmine2-custom-message plugin
declare var since: any;