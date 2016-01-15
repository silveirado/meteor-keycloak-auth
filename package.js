Package.describe({
  name: 'silveirado:keycloak-auth',
  version: '0.0.1',
  summary: 'Keycloak OAuth flow in Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
	api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
	api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('service-configuration', ['client', 'server']);

  api.export('Keycloak');

  api.addFiles(
    ['keycloak_configure.html', 'keycloak_configure.js'], 'client');

		api.addFiles('token.js', 'server');
		api.addFiles('grant.js', 'server');
  api.addFiles('keycloak_accounts.js', ['client', 'server']);

  api.addFiles('keycloak_server.js', 'server');
  api.addFiles('keycloak_client.js', 'client');


});
