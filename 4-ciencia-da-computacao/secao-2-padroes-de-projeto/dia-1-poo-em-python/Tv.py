"""

🚀 Exercício 1: Diagrama de classes da TV
Atributos:

volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
tamanho - será inicializado com o valor do parâmetro;
ligada - será inicializado com o valor de False,
         pois está inicialmente desligado.

Todos os atributos devem ser privados.

Métodos:

aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
modificar_canal - altera o canal de acordo com o parâmetro recebido e deve
                  lançar uma exceção (ValueError) caso o valor
                  esteja fora dos limites;
ligar_desligar - alterna o estado da TV entre ligado e desligado (True/False).

"""


class Tv:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        self.__volume += 1 if self.__volume < 99 else 0

    def diminuir_volume(self):
        self.__volume -= 1 if self.__volume >= 0 else 0

    def modificar_canal(self, numero_canal):
        """
        try:
            if 1 <= numero_canal <= 99:
                self.__canal = numero_canal
        except ValueError:
            f"Canal {numero_canal} inexistente"
        """
        if numero_canal <= 1 or numero_canal >= 99:
            raise ValueError(f"Canal {numero_canal} inexistente")

    def ligar_desligar(self):
        """
        if self.__ligada is False:
            self.__ligada = True
        else:
            self.__ligada = False
        """
        self.__ligada = not self.__ligada  # semelhante ao ! do Javascript
