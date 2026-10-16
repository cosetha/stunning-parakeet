export default function CodePreview() {
  return (
    <section className="section code-preview" id="code">
      <div className="reveal">
        <p className="section-label">// GitHub Actions Workflow</p>
        <h2 className="section-title">Automated deployment</h2>
        <p className="section-subtitle">
          The included workflow file handles building, testing, and deploying
          every time you push to main.
        </p>
      </div>

      <div className="code-window reveal">
        <div className="code-window-header">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-window-title">
            .github/workflows/deploy.yml
          </span>
        </div>
        <pre className="code-window-body">
          <code>
            <span className="comment"># Deploy to GitHub Pages on push to main</span>{'\n'}
            <span className="keyword">name</span>: Deploy to GitHub Pages{'\n'}
            {'\n'}
            <span className="keyword">on</span>:{'\n'}
            {'  '}<span className="keyword">push</span>:{'\n'}
            {'    '}<span className="keyword">branches</span>: [ <span className="string">main</span> ]{'\n'}
            {'\n'}
            <span className="keyword">permissions</span>:{'\n'}
            {'  '}<span className="attr">contents</span>: <span className="string">read</span>{'\n'}
            {'  '}<span className="attr">pages</span>: <span className="string">write</span>{'\n'}
            {'  '}<span className="attr">id-token</span>: <span className="string">write</span>{'\n'}
            {'\n'}
            <span className="keyword">jobs</span>:{'\n'}
            {'  '}<span className="func">deploy</span>:{'\n'}
            {'    '}<span className="keyword">runs-on</span>: <span className="string">ubuntu-latest</span>{'\n'}
            {'    '}<span className="keyword">steps</span>:{'\n'}
            {'      '}- <span className="keyword">uses</span>: <span className="string">actions/checkout@v4</span>{'\n'}
            {'      '}- <span className="keyword">uses</span>: <span className="string">actions/setup-node@v4</span>{'\n'}
            {'      '}- <span className="keyword">run</span>: <span className="tag">npm ci</span>{'\n'}
            {'      '}- <span className="keyword">run</span>: <span className="tag">npm run build</span>{'\n'}
            {'      '}- <span className="keyword">uses</span>: <span className="string">actions/upload-pages-artifact@v3</span>{'\n'}
            {'      '}- <span className="keyword">uses</span>: <span className="string">actions/deploy-pages@v4</span>{'\n'}
          </code>
        </pre>
      </div>
    </section>
  )
}
