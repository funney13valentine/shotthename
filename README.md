 <div align="center">

<img src="https://www.shotthename.xyz/assets/final_logo.png" alt="ShotTheName logo" width="100">

# ShotTheName

**Your screenshots, finally named.**

A macOS menu bar app that reads and renames every screenshot the moment you take it.

<a href="https://www.shotthename.xyz"><img src="https://img.shields.io/badge/Website-shotthename.xyz-1C2B27?style=for-the-badge" alt="Website"></a>
<img src="https://img.shields.io/badge/Platform-macOS-black?style=for-the-badge&logo=apple" alt="macOS">
<img src="https://img.shields.io/badge/Price-Free-34D399?style=for-the-badge" alt="Free">
<img src="https://img.shields.io/badge/Privacy-100%25_On--Device-1C2B27?style=for-the-badge" alt="On-device">

</div>

---

### The problem

<table>
<tr>
<td align="center" width="50%">

**Before**

`Screenshot 2026-09-11 at 11.47.08 PM.png`

Cluttered. Unsearchable. Meaningless.

</td>
<td align="center" width="50%">

**After**

`code-snaprename-history-tab.png`

Clear. Searchable. Named in &lt;0.1s.

</td>
</tr>
</table>

---

### ✦ What it does

| Feature | Description |
|---|---|
| Automatic monitoring | Watches Desktop, Downloads, Documents and Pictures |
| Smart recognition | Reads screenshots with Apple's Vision framework (OCR + image classification) |
| Instant renaming | Renames screenshots automatically — no clicks, no typing |
| Batch renaming | Batch-renames years of old screenshots in one click |
| Rename history | Full rename history with undo |
| Privacy | 100% on-device — no internet, no tracking, no accounts |

---

### ✦ How it works

<div align="center">

**1. Take a screenshot** → **2. Vision reads it in milliseconds** → **3. File renamed automatically**

</div>

---

### ✦ Tech stack

<div align="center">

<img src="https://img.shields.io/badge/Swift-FA7343?style=flat-square&logo=swift&logoColor=white">
<img src="https://img.shields.io/badge/SwiftUI-blue?style=flat-square&logo=swift&logoColor=white">
<img src="https://img.shields.io/badge/AppKit-black?style=flat-square">
<img src="https://img.shields.io/badge/Vision_Framework-1C2B27?style=flat-square">
<img src="https://img.shields.io/badge/FSEvents-34D399?style=flat-square">

</div>

---

## 📥 Installation

### Option 1: Homebrew (Recommended)

The easiest way to install ShotTheName is through Homebrew.

Open Terminal and run:

```bash
brew tap funney13valentine/tap
brew install --cask shotthename
```

Once installed, open ShotTheName from your Applications folder or Spotlight Search.

### Option 2: Manual Installation

1. Visit the [Latest Releases](https://github.com/funney13valentine/shotthename/releases).
2. Download `ShotTheName-macOS.zip`.
3. Extract the downloaded ZIP file.
4. Move `ShotTheName.app` into your Applications folder.
5. Open ShotTheName.

---

## ⚠️ macOS Security Notice

ShotTheName is currently distributed without an Apple Developer ID signature and Apple notarization.

macOS Gatekeeper may therefore display a warning:

> Apple could not verify "ShotTheName" is free of malware that may harm your Mac or compromise your privacy.

This warning means Apple has not verified the application through its standard notarization process. It does not establish that the app is malicious or that it is safe.

If you downloaded ShotTheName from the official repository and have independently verified that you trust the build, you can manually approve it.

### How to open ShotTheName

1. Try opening ShotTheName.
2. Open **System Settings**.
3. Navigate to **Privacy & Security**.
4. Scroll down to the Security section.
5. Find the message about ShotTheName.
6. Click **Open Anyway**, if available.
7. Confirm your decision.

<div align="center">

**Important:** Homebrew does not bypass macOS Gatekeeper. The same security warning may appear regardless of the installation method.

</div>

Only approve applications you trust.

---

## 🔄 Updating

To update ShotTheName through Homebrew:

```bash
brew update
brew upgrade --cask shotthename
```

Alternatively, download the latest version from [GitHub Releases](https://github.com/funney13valentine/shotthename/releases).

---

## 🗑️ Uninstallation

To uninstall ShotTheName:

```bash
brew uninstall --cask shotthename
```

To remove the Homebrew tap as well:

```bash
brew untap funney13valentine/tap
```

---

## 💻 System Requirements

| Requirement | Details |
|---|---|
| Operating System | macOS 13.0 Ventura or later |
| Architecture | Apple Silicon (M1, M2, M3, M4 and newer) for the current release |
| Framework | Apple Vision |
| Price | Completely free |

---

## 🛠️ Troubleshooting

**Homebrew returns a 404 error**

Make sure you're using the latest release and that `ShotTheName-macOS.zip` exists in the GitHub release assets.

**Checksum mismatch**

The SHA-256 checksum in the Homebrew cask must match the exact ZIP published on GitHub.

**Application cannot be opened**

Check System Settings → Privacy & Security for the Gatekeeper notification. Follow the security instructions above if you trust the downloaded build.

**Application is incompatible**

The current release is built for Apple Silicon Macs. Intel support is not included in this build.

---

<details>
<summary><b>FAQ</b></summary>
<br>

**Is it free?**

Yes — completely free, no account, no subscription.

**Does it need internet?**

No. All processing happens on-device using Apple's Vision framework.

**What macOS version does it need?**

macOS 13.0 Ventura or later.

The current release supports Apple Silicon Macs.

**Can I undo a rename?**

Yes — open the Rename History tab and click Undo on any file.

**Is my screenshot data uploaded anywhere?**

No. Screenshot processing happens locally on your Mac. ShotTheName does not upload your screenshots to a server.

**Why does macOS show a security warning?**

The current release is not notarized by Apple. See the macOS Security Notice section for instructions.

**Can I install it without Homebrew?**

Yes. Download the ZIP directly from the GitHub Releases page and move the extracted application into Applications.

</details>

---

## 🔗 Links

<div align="center">

<a href="https://www.shotthename.xyz"><img src="https://img.shields.io/badge/Official_Website-1C2B27?style=for-the-badge" alt="Website"></a>

<a href="https://github.com/funney13valentine/shotthename/releases"><img src="https://img.shields.io/badge/Download_Latest_Release-181717?style=for-the-badge&logo=github" alt="GitHub Releases"></a>

<a href="https://github.com/funney13valentine/homebrew-tap"><img src="https://img.shields.io/badge/Homebrew_Tap-FBB040?style=for-the-badge&logo=homebrew&logoColor=black" alt="Homebrew"></a>

</div>

---

## 📄 License & Usage

ShotTheName is free to use.

**Personal use only. Do not redistribute, resell, or reverse engineer.**

See the repository's licensing terms for additional details.

---

<div align="center">

### ✦ Get ShotTheName

**Your screenshots deserve better names.**

<a href="https://www.shotthename.xyz"><img src="https://img.shields.io/badge/Download-for_macOS-1C2B27?style=for-the-badge&logo=apple&logoColor=white" alt="Download"></a>

Questions? **[mx13eet@gmail.com](mailto:mx13eet@gmail.com)**

<br>

<sub>Made with ❤️ by <a href="https://github.com/funney13valentine">funney13valentine</a></sub>

</div>
