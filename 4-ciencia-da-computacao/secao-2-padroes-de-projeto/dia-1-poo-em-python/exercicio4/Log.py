from datetime import datetime

from LogEmTela import LogEmTela


class Log:
    def __init__(self, manipuladores):
        # cria um conjunto - elementos nao ordenados e que nao se repetem
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"


log_em_tela = LogEmTela()
log = Log([log_em_tela])
log.erro("ZeroDivisionError: division by zero")
# [ERRO - 27/10/2022 14:41:51]: ZeroDivisionError: division by zero
log.alerta("Alerta!!!")
# [ALERTA - 27/10/2022 14:42:39]: Alerta!!!
