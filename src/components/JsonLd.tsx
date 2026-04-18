// Renders a <script type="application/ld+json"> tag in the server-rendered
// HTML, where crawlers (and LLMs) pick it up without running any JS.
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]);
  return (
    <script
      type="application/ld+json"
      // Stringified JSON is safe here — it's our own data, not user input.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
