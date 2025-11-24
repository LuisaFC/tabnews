export default function status(request, response) {
  response
    .status(200)
    .json({ message: "Alunos do tabNews são acima da média" });
}
