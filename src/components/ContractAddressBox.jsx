import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContractAddressBox({
  address = '0x5843591afe21e7430115162e20c576d5ea764444',
  network = 'BNB Chain (BEP-20)',
  label = 'Verified Contract Address',
  explorerUrl = 'https://bscscan.com/token/0x5843591afe21e7430115162e20c576d5ea764444',
  dark = false
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ margin: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: dark ? 'var(--color-lemon)' : 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={16} color={dark ? 'var(--color-lemon)' : 'var(--color-primary)'} />
          {label} ({network})
        </span>
        {explorerUrl && (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px', color: dark ? '#fff' : 'var(--color-primary)' }}
          >
            BscScan <ExternalLink size={12} />
          </a>
        )}
      </div>
      <div className={`contract-box ${dark ? 'dark' : ''}`}>
        <span style={{ userSelect: 'all' }}>{address}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="btn-copy"
          aria-label="Copy contract address"
        >
          {copied ? (
            <>
              <Check size={14} color="var(--color-primary)" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
