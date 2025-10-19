interface BoxContent {
    title: string;
    subtitle: string;
    description: string | string[];
    heroHeight?: string;
    showTitle?: boolean;
    highlightColor?: string;
  }
  
  // Utility function to make text wrapped in **text** markers bold
  const highlightText = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <b key={index}>
            {boldText}
          </b>
        );
      }
      return part;
    });
  };
  
  export default function BoxContent({
    title,
    subtitle,
    description,
  }: BoxContent) {
    return (
      <>
        {/* Intro Section */}
        <section className="new-section-padding lg:-mt-[100px] bg-yellow-50 relative z-[10] lg:bg-transparent">
          <div className="new-container mx-auto text-center">
            <div
              className="lg:max-w-5xl lg:mx-auto lg:bg-yellow-50 lg:p-8 lg:rounded-lg lg:shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="mb-4 text-3xl font-semibold">
                {highlightText(title)}
              </h1>
              <h2 className="text-2xl mb-4 header-text">
                {highlightText(subtitle)}
              </h2>
              <div className="text-base/7 text-gray-600 space-y-4">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <p key={index}>{highlightText(paragraph)}</p>
                  ))
                ) : (
                  <p>{highlightText(description)}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  