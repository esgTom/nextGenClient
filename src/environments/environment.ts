// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  nextGenAPICodeUrl: 'http://localhost/nextGenAPI/api/code',
  nextGenAPIProjectUrl: 'http://localhost/nextGenAPI/api/project',
  nextGenAPITemplateUrl: 'http://localhost/nextGenAPI/api/template',
  nextGenAPITableUrl: 'http://localhost/nextGenAPI/api/tabledefinition',
  nextGenAPIGenerateCodeUrl: 'http://localhost/nextGenAPI/api/generatecode',
  nextGenAPIimportColumnMetaDataUrl: 'http://localhost/nextGenAPI/api/import/importcolumnmetadata',

  userName: 'NxtGenUser'

};
