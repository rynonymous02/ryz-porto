# Strict Agent Rules & Guidelines for ryz-porto

## 1. DILARANG MENGUBAH LAYOUT & DESIGN (HARAM HUKUMNYA)
- **Zero Layout Changes**: DILARANG KERAS mengubah layout, dimensi, margin, padding, posisi, grid, flexbox, alignment, atau hierarki visual bahkan 1mm pun, KECUALI diminta secara eksplisit dan spesifik oleh USER.
- **Zero Style Changes**: DILARANG mengubah style, warna, typography, font-size, line-height, transisi, atau detail CSS secuil pun tanpa perintah eksplisit.
- **Rewrite / Migration Integrity**: Saat melakukan migrasi atau rewrite framework (misal: HTML statis ke Astro, MDX, React, Tailwind, dll):
  - Pertahankan struktur HTML, tag, class name, dan CSS styling 100% identik (pixel-perfect 1:1) dengan aslinya.
  - Jangan pernah berinisiatif "memperbaiki", "merapikan", atau "mengimprovisasi" design/layout yang sudah ada. Jika aslinya seperti itu, biarkan tetap persis seperti itu.

## 2. JANGAN BUKA / CEK BROWSER SENDIRI
- Dilarang keras menggunakan browser tool, browser subagent, screenshot tool, atau inspeksi browser secara otomatis/inisiatif sendiri.
- User memiliki browser dan mata sendiri untuk melakukan preview dan verifikasi tampilan secara manual.
- Jangan pernah membuka atau mengontrol browser kecuali jika USER secara eksplisit menyuruh "cek browser" atau "buka browser".

## 3. DILARANG GIT COMMIT, MERGE, ATAU PUSH OTOMATIS
- DILARANG KERAS mengeksekusi `git commit`, `git merge`, atau `git push`.
- Seluruh keputusan commit dan pengelolaan git history sepenuhnya dipegang oleh USER.
- Agen hanya diperbolehkan mengedit file atau menyarankan perintah tanpa menjalankannya secara otomatis.
