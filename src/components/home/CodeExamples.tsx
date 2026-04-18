import CodeTabs from "../CodeTabs";

const tabs = [
  {
    label: "Rust",
    language: "rust",
    code: `use chaincodec_evm::EvmDecoder;

let decoder = EvmDecoder::new();
let event = decoder.decode_event(&log, &schema)?;
println!(
    "Transfer: {} → {} ({})",
    event.fields["from"],
    event.fields["to"],
    event.fields["value"],
);`,
  },
  {
    label: "TypeScript",
    language: "typescript",
    code: `import { EvmDecoder } from '@chainfoundry/chaincodec';

const decoder = new EvmDecoder();
const event = decoder.decodeEvent(rawLog, schema);
console.log(
  \`Transfer: \${event.fields.from} → \${event.fields.to} (\${event.fields.value})\`
);`,
  },
  {
    label: "Python",
    language: "python",
    code: `from chaincodec import EvmDecoder

decoder = EvmDecoder()
event = decoder.decode_event(raw_log, schema)
print(f"Transfer: {event.fields['from']} → {event.fields['to']} ({event.fields['value']})")`,
  },
];

export default function CodeExamples() {
  return (
    <section className="border-y border-ink/10 bg-ink-900 py-20 text-white md:py-28">
      <div className="container-prose">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Code in any language</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
            3 lines to decode. Any chain. Any language.
          </h2>
          <p className="mt-5 text-lg text-white/70 md:text-xl">
            Same API surface across Rust, TypeScript, Python, Go, Java, and WASM. Bring your stack — we&apos;ll match it.
          </p>
        </div>

        <div className="reveal mt-12">
          <CodeTabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
