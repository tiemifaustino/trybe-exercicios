from ManipuladorDeLog import ManipuladorDeLog


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open("log.txt", "a") as arquivo:
            print(msg, file=arquivo)


# "a" - Append - Opens a file for appending,
# creates the file if it does not exist
