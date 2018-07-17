# New Project
## Install from From Template
dotnet new razor -au Individual  

## List Templates
dotnet new --list

## Add net templates
[https://github.com/dotnet/templating/wiki/Available-templates-for-dotnet-new](dotnet new -i "Auth0.Templates::*")


## Start webapp
dotnet start

## Add Package
[https://www.nuget.org/packages](dotnet add package Newtonsoft.Json --version 11.0.2)

## EF
......
dotnet ef dbcontext scaffold "Datasource=app.db" Microsoft.EntityFrameworkCore.Sqlite -o Model


## Webpage Scaffolding
dotnet tool install -g dotnet-aspnet-codegenerator

