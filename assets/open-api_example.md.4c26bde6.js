import{_ as n,c as s,o as a,d as t}from"./app.5f61ba59.js";const y='{"title":"Python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":3,"title":"Python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B","slug":"python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B"}],"relativePath":"open-api/example.md","lastUpdated":1642059710911}',p={},o=t(`<h3 id="python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B" tabindex="-1">Python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#python\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-python"><pre><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> hashlib
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">from</span> math <span class="token keyword">import</span> trunc

<span class="token comment">###\u586B\u5145\u53C2\u6570\u90E8\u5206</span>
<span class="token comment">################################################</span>
<span class="token comment"># \u4E1A\u52A1\u7EC4 key</span>
appId <span class="token operator">=</span> <span class="token string">&quot;XXXXXXXXXXXX&quot;</span>

<span class="token comment"># \u4E1A\u52A1\u7EC4 secret key</span>
appSecret <span class="token operator">=</span> <span class="token string">&quot;XXXXXXXXXXX&quot;</span>

<span class="token comment"># \u8BF7\u6C42\u8DEF\u5F84\uFF0Cexample\uFF1A/affliate/list</span>
api_path <span class="token operator">=</span> <span class="token string">&quot;/affliate/list&quot;</span>

<span class="token comment"># \u8BF7\u6C42host</span>
host <span class="token operator">=</span> <span class="token string">&quot;http://de-openapi.prod.cht.ww5sawfyut0k.bitsvc.io&quot;</span>

<span class="token comment"># \u8BF7\u6C42\u53C2\u6570</span>
req_body <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;params&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;affiliate_id&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;783&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">################################################</span>


<span class="token comment"># \u79D2\u7EA7\u65F6\u95F4\u6233</span>
dt <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
timestamp <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>trunc<span class="token punctuation">(</span>dt<span class="token punctuation">.</span>timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u8BA1\u7B97\u7B7E\u540D</span>
sign_str <span class="token operator">=</span> <span class="token string">&quot;%s+%s+%s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>appId<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> appSecret<span class="token punctuation">)</span>
sign <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>sha1<span class="token punctuation">(</span>sign_str<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u751F\u6210headers</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;AppKeyId&quot;</span><span class="token punctuation">:</span> appId<span class="token punctuation">,</span>
    <span class="token string">&quot;Timestamp&quot;</span><span class="token punctuation">:</span> timestamp<span class="token punctuation">,</span>
    <span class="token string">&quot;Sign&quot;</span><span class="token punctuation">:</span> sign<span class="token punctuation">,</span>
    <span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;application/json&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u7EC4\u5408url</span>
url <span class="token operator">=</span> host <span class="token operator">+</span> <span class="token string">&quot;/open-api/queryData&quot;</span> <span class="token operator">+</span> api_path

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;url:&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;sign:&quot;</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;headers:&quot;</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;request body:&quot;</span><span class="token punctuation">,</span> req_body<span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> json<span class="token operator">=</span>req_body<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;response:&quot;</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Exception when calling api: %s \\n&quot;</span> <span class="token operator">%</span> e<span class="token punctuation">)</span>
</code></pre></div><h4 id="java\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B" tabindex="-1">Java\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#java\u8BF7\u6C42\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h4><div class="language-java"><pre><code>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>codec<span class="token punctuation">.</span>digest<span class="token punctuation">.</span></span><span class="token class-name">DigestUtils</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang3<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpEntity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpStatus</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>client<span class="token punctuation">.</span>methods<span class="token punctuation">.</span></span><span class="token class-name">CloseableHttpResponse</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>client<span class="token punctuation">.</span>methods<span class="token punctuation">.</span></span><span class="token class-name">HttpPost</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">StringEntity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">CloseableHttpClient</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">HttpClients</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">EntityUtils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">UnsupportedEncodingException</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * \u4E1A\u52A1\u7EC4app key
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> appId <span class="token operator">=</span> <span class="token string">&quot;XXXXXXXXXX&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u4E1A\u52A1\u7EC4app secret key
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> appSecret <span class="token operator">=</span> <span class="token string">&quot;XXXXXXXXXX&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u8282\u70B9host
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> host <span class="token operator">=</span> <span class="token string">&quot;http://de-openapi.prod.cht.ww5sawfyut0k.bitsvc.io&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BF7\u6C42\u8DEF\u5F84, \u66FF\u6362\u6210\u8981\u8BF7\u6C42\u7684\u63A5\u53E3</span>
        <span class="token class-name">String</span> apiPath <span class="token operator">=</span> <span class="token string">&quot;/affliate/list&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// \u79D2\u7EA7\u65F6\u95F4\u6233</span>
        <span class="token class-name">String</span> timestamp <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8BF7\u6C42\u53C2\u6570body</span>
        <span class="token class-name">String</span> requestBody <span class="token operator">=</span> <span class="token string">&quot;{\\&quot;params\\&quot;:{\\&quot;affiliate_id\\&quot;:\\&quot;783\\&quot;}}&quot;</span><span class="token punctuation">;</span>


        <span class="token function">executeRequest</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">,</span> apiPath<span class="token punctuation">,</span> requestBody<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">executeRequest</span><span class="token punctuation">(</span><span class="token class-name">String</span> timestamp<span class="token punctuation">,</span> <span class="token class-name">String</span> apiPath<span class="token punctuation">,</span> <span class="token class-name">String</span> requestBody<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BA1\u7B97\u7B7E\u540D</span>
        <span class="token class-name">String</span> authStr <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">+</span> appSecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sign <span class="token operator">=</span> <span class="token class-name">DigestUtils</span><span class="token punctuation">.</span><span class="token function">sha1Hex</span><span class="token punctuation">(</span>authStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">HttpPost</span> post <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpPost</span><span class="token punctuation">(</span> host <span class="token operator">+</span> <span class="token string">&quot;/open-api/queryData&quot;</span> <span class="token operator">+</span> apiPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        post<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        post<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span> <span class="token string">&quot;AppKeyId&quot;</span> <span class="token punctuation">,</span> appId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        post<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span> <span class="token string">&quot;Timestamp&quot;</span> <span class="token punctuation">,</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        post<span class="token punctuation">.</span><span class="token function">addHeader</span><span class="token punctuation">(</span> <span class="token string">&quot;Sign&quot;</span> <span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8BF7\u6C42\u4F53</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            post<span class="token punctuation">.</span><span class="token function">setEntity</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringEntity</span><span class="token punctuation">(</span>requestBody<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u6267\u884C\u8BF7\u6C42</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">CloseableHttpClient</span> httpClient <span class="token operator">=</span> <span class="token class-name">HttpClients</span><span class="token punctuation">.</span><span class="token function">createDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">CloseableHttpResponse</span> response <span class="token operator">=</span> httpClient<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> result<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getStatusLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">HttpStatus</span><span class="token punctuation">.</span>SC_OK<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u4ECE\u54CD\u5E94\u6A21\u578B\u4E2D\u83B7\u53D6\u54CD\u5E94\u5B9E\u4F53</span>
                <span class="token class-name">HttpEntity</span> responseEntity <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>responseEntity <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    result <span class="token operator">=</span> <span class="token class-name">EntityUtils</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>responseEntity<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;http status\uFF1A&quot;</span> <span class="token operator">+</span> response<span class="token punctuation">.</span><span class="token function">getStatusLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,4),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var g=n(p,[["render",e]]);export{y as __pageData,g as default};
