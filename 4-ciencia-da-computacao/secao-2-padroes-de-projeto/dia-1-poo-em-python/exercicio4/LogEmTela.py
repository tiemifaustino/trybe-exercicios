from ManipuladorDeLog import ManipuladorDeLog


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)
