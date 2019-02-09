import {Get, Controller, Res, Query, Post, Body, Session, BadRequestException} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioService} from "./usuario/usuario.service";
import {RolPorUsuarioService} from "./rol-por-usuario/rol-por-usuario.service";

@Controller()
export class AppController {
  constructor(private readonly _appService: AppService,
              private readonly  _usuarioService:UsuarioService,
              private readonly _rolPorUsuarioServicio: RolPorUsuarioService) {}


  @Get('login')
  mostrarLogin(
      @Res() res,
      @Query('error') error: string,
      @Query('mensaje') mensajeRegistro:string,
      @Query('tipo') tipo:string
  ) {
    let mensaje = undefined;
    let clase = undefined;
    let mensajeUsuario=undefined;

    if(error){
      mensaje = "Datos erroneos";
    }

    if(mensajeRegistro && tipo){
      switch (tipo) {
        case 'verificacion':
          mensajeUsuario= mensajeRegistro
          clase= 'alert alert-info'
          break;
        case 'registro':
          mensajeUsuario= mensajeRegistro
          clase= 'alert alert-danger'
          break;
      }}

      res.render('login', {
        mensajeRegistro: mensajeRegistro,
        mensaje:mensaje,
        clase:clase
      })
    }




  @Post('login')
  async metodoLogin(
      @Body('correo') correo: string,
      @Body('password') password: string,
      @Body('nickname') nickname: string,
      @Res() res,
      @Session() sesion,

  ) {

    let mensaje = undefined;


    /*const objetoValidacionLogin = new CreateLoginDto();
    objetoValidacionLogin.correo = correo;
    objetoValidacionLogin.password = password;

    const errores: ValidationError[] =
        await validate(objetoValidacionLogin) // Me devuelve un arreglo de validacion de errores

    const hayErrores = errores.length > 0;

    if (hayErrores) {
      console.error(errores)

      const parametrosConsulta = `?error=${errores[0].constraints}`;

      res.redirect('/login/' + parametrosConsulta)

    } else {*/

    const autenticacion = await this._usuarioService.autenticar(correo, password)

    if (autenticacion) {
      const idUsuario = autenticacion.idUsuario;
      const rolUsuario = await this._rolPorUsuarioServicio.verificarRol(+idUsuario)

      if (rolUsuario) {
        const nombreRol = rolUsuario.rol.nombreRol
        sesion.rol = nombreRol
        sesion.correo = correo;
        sesion.idUsuario = idUsuario;
        // console.log(sesion)
        switch (nombreRol) {
          case 'usuario':
            res.redirect('mascota/inicio-usuario')
            break;
          case 'administrador':
            res.redirect('mascota/inicio')
            break;
          default:
            res.send('Aun no se ha asignado una tarea para este rol')

        }
      } else {
        res.redirect('/login?mensaje=espere estamos verificando sus datos&tipo=verificacion')
        //res.send('sin rol')
        //throw new BadRequestException({mensaje: 'Espere estamos verificando sus datos'})

      }
    }else{
      let mensajeConsulta=`?mensaje=Usted no se encuentra registrado en el sistema&tipo=registro`
      res.redirect('/login'+mensajeConsulta)
    }
  }



  @Get('logout')
  logout(
      @Res() res,
      @Session() sesion,
  )
  {

    sesion.usuario = undefined;
    sesion.destroy()
    res.redirect('login')
  }





}


