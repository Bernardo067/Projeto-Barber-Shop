namespace BarberShop.Util
{
    public class ValidaSenha
    {
        public static bool ValidacaoSenha(string password)
        {
            // Definindo os requisitos para a senha
            var hasMinimumLength = password.Length >= 8;
            var hasUppercaseLetter = password.Any(char.IsUpper);
            var hasLowercaseLetter = password.Any(char.IsLower);
            var hasDigit = password.Any(char.IsDigit);
            var hasSpecialCharacter = password.Any(ch => !char.IsLetterOrDigit(ch));

            // Verifique se a senha atende a todos os requisitos
            return hasMinimumLength && hasUppercaseLetter && hasLowercaseLetter && hasDigit && hasSpecialCharacter;
        }
    }
}
